import { createClient, EntryCollection } from 'contentful'
import { Project } from './data'

// Contentful entry type for projects
// Using a more flexible type to handle any field names from Contentful
interface ContentfulProjectFields {
  [key: string]: any // Allow any field names since Contentful field IDs can vary
  name?: string
  title?: string
  description?: string
  longDescription?: string
  image?: string | {
    fields?: {
      file?: {
        url?: string
      }
    }
  }
  liveUrl?: string
  githubUrl?: string
  techStack?: string[]
  featured?: boolean
}

// Contentful entry type that satisfies EntrySkeletonType
interface ContentfulProject {
  contentTypeId: 'projects'
  fields: ContentfulProjectFields
  sys: {
    id: string
  }
}

// Create client only if environment variables are set
function getClient() {
  if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_TOKEN) {
    return null
  }

  return createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })
}

// Track if we've logged debug info
let hasLoggedFields = false

// Transform Contentful entry to Project
function transformProject(entry: any, isFirst: boolean = false): Project {
  const fields = entry.fields || {}
  
  // Debug: Log available fields only once for the first entry
  if (process.env.NODE_ENV === 'development' && isFirst && !hasLoggedFields) {
    console.log('Contentful entry fields:', Object.keys(fields))
    console.log('Sample entry data:', JSON.stringify(fields, null, 2))
    hasLoggedFields = true
  }
  
  // Get image URL - handle both direct URLs and Contentful asset references
  let imageUrl = 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800' // default fallback
  if (fields.image) {
    if (typeof fields.image === 'string') {
      imageUrl = fields.image
    } else if (typeof fields.image === 'object') {
      // Handle Contentful asset reference
      const asset = fields.image as any
      if (asset.fields?.file?.url) {
        imageUrl = `https:${asset.fields.file.url}`
      } else if (asset.sys?.id) {
        // If it's a linked asset, we'd need to resolve it, but for now use fallback
        console.warn(`Asset ${asset.sys.id} needs to be resolved`)
      }
    }
  }

  // Handle techStack - could be an array of strings or an array of objects
  let techStack: string[] = []
  if (fields.techStack) {
    techStack = fields.techStack.map((tech: any) => 
      typeof tech === 'string' ? tech : tech?.fields?.name || tech?.name || String(tech)
    )
  }

  // Get title - Contentful field IDs can vary, so check multiple possibilities
  // The "Name" column in Contentful UI might map to different field IDs
  let title = 
    fields.name || 
    fields.title || 
    fields.projectName ||
    fields.projectTitle ||
    fields.Name || // Sometimes capitalized
    fields.Title || // Sometimes capitalized
    (fields as any)['project-name'] || // Kebab case
    (fields as any)['project-title'] || // Kebab case
    null
  
  // If still not found, search through all fields for a string that looks like a title
  if (!title) {
    for (const [key, value] of Object.entries(fields)) {
      // Skip non-string fields and common non-title fields
      if (typeof value === 'string' && 
          value.length > 0 && 
          !['description', 'longDescription', 'liveUrl', 'githubUrl'].includes(key) &&
          !key.toLowerCase().includes('url') &&
          !key.toLowerCase().includes('image')) {
        title = value
        if (process.env.NODE_ENV === 'development') {
          console.log(`Using field "${key}" as title: ${value}`)
        }
        break
      }
    }
  }
  
  // Final fallback
  if (!title) {
    title = 'Untitled Project'
  }
  
  // Log if we're using fallback to help debug
  if (title === 'Untitled Project' && process.env.NODE_ENV === 'development') {
    console.warn('Using fallback title. Available fields:', Object.keys(fields))
    console.warn('Field values:', Object.entries(fields).map(([k, v]) => 
      `${k}: ${typeof v === 'string' ? v.substring(0, 50) : typeof v}`
    ))
  }

  // Get featured status - handle different field names and types
  let featured = false
  if (fields.featured !== undefined) {
    // Handle boolean directly
    featured = Boolean(fields.featured)
  } else if (fields.isFeatured !== undefined) {
    featured = Boolean(fields.isFeatured)
  } else if (fields.Featured !== undefined) {
    featured = Boolean(fields.Featured)
  } else if (typeof (fields as any).featured === 'string') {
    // Handle string values like "true", "yes", etc.
    const featuredStr = String((fields as any).featured).toLowerCase()
    featured = ['true', 'yes', '1', 'on'].includes(featuredStr)
  }
  
  // Debug logging for featured field
  if (process.env.NODE_ENV === 'development' && isFirst && !hasLoggedFields) {
    console.log('Featured field value:', fields.featured, 'Resolved to:', featured)
  }

  // Get liveUrl - handle different field names (similar to title handling)
  // Prioritize 'url' since that's the field name used in Contentful
  let liveUrl = 
    fields.url ||           // Contentful field name (priority)
    fields.liveUrl || 
    fields.projectUrl ||
    fields.live_url ||
    fields['live-url'] ||
    fields['project-url'] ||
    fields.LiveUrl ||
    fields.URL ||
    '#'
  
  // Get githubUrl - handle different field names
  let githubUrl = 
    fields.githubUrl || 
    fields.github || 
    fields.github_url ||
    fields['github-url'] ||
    fields.GithubUrl ||
    fields.GitHub ||
    '#'

  // Debug logging for URLs
  if (process.env.NODE_ENV === 'development' && isFirst && !hasLoggedFields) {
    console.log('Live URL field value:', liveUrl)
    console.log('GitHub URL field value:', githubUrl)
  }

  return {
    id: entry.sys?.id || entry.id || '',
    title: title,
    description: fields.description || '',
    longDescription: fields.longDescription || fields.description || '',
    image: imageUrl,
    liveUrl: liveUrl,
    githubUrl: githubUrl,
    techStack: techStack,
    featured: featured,
  }
}

// Fetch all projects from Contentful
export async function getAllProjects(): Promise<Project[]> {
  const client = getClient()
  
  if (!client) {
    return []
  }

  try {
    const entries = await client.getEntries({
      content_type: 'projects',
      limit: 1000, // Fetch all projects (adjust if you have more than 1000)
      order: ['-sys.updatedAt'] as any, // Order by most recently updated
      // Include all fields - Contentful returns all fields by default, but being explicit
    }) as EntryCollection<ContentfulProject>
    
    // Debug: Log first entry to see structure
    if (process.env.NODE_ENV === 'development' && entries.items.length > 0) {
      console.log('Sample Contentful entry:', JSON.stringify(entries.items[0], null, 2))
    }

    if (!entries.items || entries.items.length === 0) {
      console.warn('No projects found in Contentful')
      return []
    }

    // Reset the logging flag for this fetch
    hasLoggedFields = false
    
    return entries.items.map((entry: any, index: number) => transformProject(entry, index === 0))
  } catch (error) {
    console.error('Error fetching projects from Contentful:', error)
    // Return empty array on error to prevent app crash
    return []
  }
}

// Fetch a single project by ID
export async function getProjectById(id: string): Promise<Project | null> {
  const client = getClient()
  
  if (!client) {
    return null
  }

  try {
    const entry = await client.getEntry(id) as any
    return transformProject(entry)
  } catch (error) {
    console.error(`Error fetching project ${id} from Contentful:`, error)
    return null
  }
}

