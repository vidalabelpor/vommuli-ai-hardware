// Lead qualification and scoring logic
export interface ContactFormData {
  firstName: string
  lastName: string
  companyName: string
  jobTitle: string
  email: string
  phone?: string
  companySize: string
  industry: string
  hardwareRequirements: string
  timelineUrgency: string
  budgetRange: string
  challenges: string[]
  geographicPreferences: string[]
  additionalInfo?: string
}

export interface LeadScore {
  score: number
  priority: 'high' | 'medium' | 'low'
  qualificationNotes: string[]
}

export function calculateLeadScore(formData: ContactFormData): LeadScore {
  let score = 0
  const qualificationNotes: string[] = []

  // Budget Range Scoring (35% of total score)
  switch (formData.budgetRange) {
    case '10m+':
      score += 35
      qualificationNotes.push('High-value prospect: $10M+ budget')
      break
    case '5m-10m':
      score += 30
      qualificationNotes.push('Enterprise prospect: $5M-$10M budget')
      break
    case '1m-5m':
      score += 25
      qualificationNotes.push('Qualified prospect: $1M-$5M budget')
      break
    case '500k-1m':
      score += 15
      qualificationNotes.push('Mid-market prospect: $500K-$1M budget')
      break
  }

  // Timeline Urgency Scoring (25% of total score)
  switch (formData.timelineUrgency) {
    case 'emergency':
      score += 25
      qualificationNotes.push('Emergency timeline: immediate revenue opportunity')
      break
    case 'strategic':
      score += 20
      qualificationNotes.push('Strategic timeline: 1-3 months delivery window')
      break
    case 'planning':
      score += 15
      qualificationNotes.push('Planning phase: 3-6 months timeline')
      break
    case 'future':
      score += 5
      qualificationNotes.push('Future planning: 6+ months timeline')
      break
  }

  // Company Size Scoring (20% of total score)
  switch (formData.companySize) {
    case '5000+':
      score += 20
      qualificationNotes.push('Large enterprise: 5000+ employees')
      break
    case '500-5000':
      score += 15
      qualificationNotes.push('Mid-enterprise: 500-5000 employees')
      break
    case '50-500':
      score += 10
      qualificationNotes.push('Growth company: 50-500 employees')
      break
    case 'government':
      score += 18
      qualificationNotes.push('Government/Academic: high conversion probability')
      break
  }

  // Industry Scoring (10% of total score)
  const highValueIndustries = ['fintech', 'healthcare', 'autonomous', 'cloud']
  if (highValueIndustries.includes(formData.industry)) {
    score += 10
    qualificationNotes.push(`High-value industry: ${formData.industry}`)
  } else {
    score += 5
    qualificationNotes.push(`Standard industry: ${formData.industry}`)
  }

  // Challenge Alignment Scoring (10% of total score)
  const vommuliStrengths = ['availability', 'timeline', 'pricing']
  const alignedChallenges = formData.challenges.filter(challenge => 
    vommuliStrengths.includes(challenge)
  )
  score += alignedChallenges.length * 3
  if (alignedChallenges.length > 0) {
    qualificationNotes.push(`Challenge alignment: ${alignedChallenges.join(', ')}`)
  }

  // Geographic Arbitrage Interest (bonus points)
  if (formData.geographicPreferences.includes('arbitrage')) {
    score += 5
    qualificationNotes.push('Geographic arbitrage interest: competitive differentiator')
  }

  // Determine priority level
  let priority: 'high' | 'medium' | 'low'
  if (score >= 75) {
    priority = 'high'
    qualificationNotes.push('HIGH PRIORITY: immediate follow-up required')
  } else if (score >= 50) {
    priority = 'medium'
    qualificationNotes.push('MEDIUM PRIORITY: follow-up within 24 hours')
  } else {
    priority = 'low'
    qualificationNotes.push('LOW PRIORITY: standard follow-up process')
  }

  return {
    score,
    priority,
    qualificationNotes
  }
}

export function generateFollowUpStrategy(formData: ContactFormData, leadScore: LeadScore): string {
  const { priority } = leadScore
  
  if (priority === 'high') {
    if (formData.timelineUrgency === 'emergency') {
      return 'IMMEDIATE RESPONSE: Call within 2 hours, emergency procurement team activation'
    } else {
      return 'PRIORITY RESPONSE: Schedule call within 24 hours, senior team member assignment'
    }
  } else if (priority === 'medium') {
    return 'STANDARD RESPONSE: Email response within 24 hours, qualification call within 48 hours'
  } else {
    return 'NURTURE SEQUENCE: Add to newsletter, follow-up in 30 days unless timeline advances'
  }
}

export function formatLeadNotification(formData: ContactFormData, leadScore: LeadScore): string {
  const followUpStrategy = generateFollowUpStrategy(formData, leadScore)
  
  return `
🚨 NEW LEAD: ${formData.companyName} - Score: ${leadScore.score}/100 (${leadScore.priority.toUpperCase()})

CONTACT INFO:
• Name: ${formData.firstName} ${formData.lastName}
• Title: ${formData.jobTitle}
• Email: ${formData.email}
• Phone: ${formData.phone || 'Not provided'}

QUALIFICATION:
• Budget: ${formData.budgetRange}
• Timeline: ${formData.timelineUrgency}
• Company Size: ${formData.companySize}
• Industry: ${formData.industry}

REQUIREMENTS:
${formData.hardwareRequirements}

CHALLENGES:
${formData.challenges.join(', ') || 'None specified'}

QUALIFICATION NOTES:
${leadScore.qualificationNotes.join('\n')}

FOLLOW-UP STRATEGY:
${followUpStrategy}

ADDITIONAL INFO:
${formData.additionalInfo || 'None provided'}
`
}

// Mock email service (replace with actual email provider like Resend)
export async function sendLeadNotification(formData: ContactFormData): Promise<boolean> {
  try {
    const leadScore = calculateLeadScore(formData)
    const notification = formatLeadNotification(formData, leadScore)
    
    // In production, integrate with Resend or similar service
    console.log('Lead Notification:', notification)
    
    // Mock successful email send
    return true
  } catch (error) {
    console.error('Failed to send lead notification:', error)
    return false
  }
}

export async function sendAutoresponder(email: string, firstName: string, priority: string): Promise<boolean> {
  try {
    const responseTime = priority === 'high' ? '2 hours' : priority === 'medium' ? '24 hours' : '48 hours'
    
    // Send autoresponder email
    console.log(`Sending autoresponder to ${email} - Response time: ${responseTime}`)
    
    // Email content for autoresponder
    const emailContent = `
Hi ${firstName},

Thank you for contacting Vommuli regarding your AI hardware procurement needs.

We've received your submission and will respond within ${responseTime} based on your timeline requirements.

In the meantime, you can:
• Use our Commission Calculator: https://vommuli.com/tools/commission-calculator
• Review our Timeline Planner: https://vommuli.com/tools/timeline-planner
• Call our emergency line for urgent needs: +1 (555) VOMMULI

Best regards,
Vommuli Procurement Team
AI Hardware Specialists

---
This is an automated response. For immediate assistance, please call our emergency line.
`

    // In production, send actual email using email service
    console.log('Autoresponder sent to:', email)
    console.log('Email content:', emailContent)
    return true
  } catch (error) {
    console.error('Failed to send autoresponder:', error)
    return false
  }
}