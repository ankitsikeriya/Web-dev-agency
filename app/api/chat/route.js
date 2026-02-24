import { NextResponse } from 'next/server';
 
const AGENCY_CONTEXT = `
You are the AI assistant for "DesignedByDudes", a modern web agency.
Your goal is to help visitors understand our services, pricing, and how to contact us.
Be professional, concise, and helpful. Use a friendly but tech-savvy tone.
 
AGENCY DETAILS: 
- Name: DesignedByDudes 
- Tagline: Your Vision, Our Code.
- Location: 123 Tech Park, Cyber City
  
SERVICES:
1. Web Development: High-performance websites (Next.js, React).
2. UI/UX Design: Intuitive interfaces.
3. SEO Optimization: Rank higher and drive traffic.
4. Mobile Apps: Native and cross-platform.

PRICING PACKAGES:
1. STARTER PACKAGE (Rs 4999): 
   - 5 Pages Website
   - Free Domain (.com/.in/.co.in)
   - Unlimited Images & Videos
   - SEO Ready (25-40 Keywords)
   - Free Logo Design
   - Google Map/Business Listing
   - Admin Panel
   - Payment Gateway
   - Cloudflare Security
   - Social Media Integration
   - Call/WhatsApp Button
   - Inquiry Form
   - Live Chat Software
   - 48h Auto Backup
   - 24/7 Support

2. PROFESSIONAL PACKAGE (Rs 7999) - BEST VALUE:
   - 10 Pages Website
   - Free Domain
   - Unlimited Images & Videos
   - SEO Ready (50-60 Keywords)
   - Free Logo Design
   - Google Map/Business Listing
   - Admin Panel
   - Payment Gateway
   - Cloudflare Security
   - Social Media Integration
   - Call/WhatsApp Button
   - Inquiry Form
   - Live Chat Software
   - 48h Auto Backup
   - 24/7 Support

CONTACT INFO:
- Phone: +91 98765 43210
- Email: hello@designedbydudes.com
- Address: 123 Tech Park, Cyber City

If asked about something not in this list, politely say you can't help with that specific request but can connect them with a human agent via the Contact form or WhatsApp.
`;
 
export async function POST(req) {
    try {
        const { message } = await req.json();

        // 1. Try to use an LLM if API key is present (Placeholder for future integration)
        // const apiKey = process.env.OPENAI_API_KEY;
        // if (apiKey) { ... }

        // 2. Fallback: Keyword matching system
        const lowerMsg = message.toLowerCase(); 
        let response = "I'm not sure about that. Could you please be more specific? You can also contact our team directly via WhatsApp.";

        if (lowerMsg.includes('hello') || lowerMsg.includes('hi') || lowerMsg.includes('hey')) {
            response = "Hello! Welcome to DesignedByDudes. How can I help you today? I can tell you about our services, pricing, or how to contact us.";
        } else if (lowerMsg.includes('price') || lowerMsg.includes('cost') || lowerMsg.includes('package') || lowerMsg.includes('plan')) {
            response = "We offer two main packages:\n\n1. **Starter Package (Rs 4999)**: Great for small businesses. Includes 7 pages, free domain, and SEO.\n\n2. **Professional Package (Rs 7999)**: Our best value! Includes 20 pages, advanced SEO, and more.\n\nWhich one are you interested in?";
        } else if (lowerMsg.includes('service') || lowerMsg.includes('offer') || lowerMsg.includes('do you do')) {
            response = "We specialize in:\n- **Web Development** (Next.js, React)\n- **UI/UX Design**\n- **SEO Optimization**\n- **Mobile App Development**\n\nNeed a custom solution? Let us know!";
        } else if (lowerMsg.includes('contact') || lowerMsg.includes('phone') || lowerMsg.includes('email') || lowerMsg.includes('call') || lowerMsg.includes('location') || lowerMsg.includes('address')) {
            response = "You can reach us at:\n- **Phone**: +91 98765 43210\n- **Email**: hello@designedbydudes.com\n- **Location**: 123 Tech Park, Cyber City\n\nOr just click the WhatsApp button below!";
        } else if (lowerMsg.includes('website') || lowerMsg.includes('web')) {
            response = "We build high-performance websites using modern technologies like Next.js and React. Our websites are fast, secure, and SEO-friendly. Check out our pricing plans to get started!";
        } else if (lowerMsg.includes('seo')) {
            response = "Our SEO services help you rank higher on search engines. We include keyword optimization (25-60 keywords depending on the plan) to drive organic traffic to your site.";
        } else if (lowerMsg.includes('logo')) {
            response = "Yes! Both our Starter and Professional packages include a **Free Logo Design** for your brand.";
        } else if (lowerMsg.includes('domain')) {
            response = "We provide a **Free Domain Name** (.com, .in, or .co.in) with both of our packages.";
        }

        // Simulate network delay for realism 
        await new Promise(resolve => setTimeout(resolve, 500));

        return NextResponse.json({ response });

    } catch (error) {
        console.error('Chat API Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
