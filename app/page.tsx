"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Star, CheckCircle, Leaf, Hammer, Wrench, Square } from "lucide-react"

export default function TKLandscapesPage() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tklandscapes_logo-pTDI1Rk9STzbBwYQWz3wqtsAVpustF.png"
                alt="TK Landscapes Logo"
                className="h-22 w-22 mr-3"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button
                className="text-foreground hover:text-primary transition-colors cursor-pointer"
                onClick={() => scrollToSection("services")}
              >
                Services
              </button>
              <button
                className="text-foreground hover:text-primary transition-colors cursor-pointer"
                onClick={() => scrollToSection("instagram")}
              >
                Portfolio
              </button>
              <button
                className="text-foreground hover:text-primary transition-colors cursor-pointer"
                onClick={() => scrollToSection("about")}
              >
                About
              </button>
              <button
                className="text-foreground hover:text-primary transition-colors cursor-pointer"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </button>
            </div>
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => (window.location.href = "tel:0406778600")}
            >
              <Phone className="w-4 h-4 mr-2" />
              Call 0406 778 600
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/header%20image-okBAaqdSGnZ10jhxWIE69DdBuVJscq.jpeg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-balance">Transform Your Outdoor Space</h1>
          <p className="text-xl md:text-2xl mb-8 text-pretty max-w-2xl mx-auto">
            Bespoke landscaping solutions in Melbourne. From elegant paving to stunning decking, we create outdoor
            spaces that inspire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4"
              onClick={() => scrollToSection("contact")}
            >
              Book a Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4 bg-transparent"
              onClick={() => scrollToSection("instagram")}
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive landscaping solutions tailored to Melbourne's unique environment
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Square,
                title: "Paving",
                description: "Premium stone and concrete paving solutions for driveways, patios, and walkways",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/paving-8wWHSuA3yzV6Sr64vpPbfPG4WEzZia.jpeg",
              },
              {
                icon: Hammer,
                title: "Decking",
                description: "Beautiful timber and composite decking to extend your living space outdoors",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/decking-gKkcVU0fhF0ifk5Uj5vtITO6jhNyaN.png",
              },
              {
                icon: Wrench,
                title: "Construction",
                description: "Complete outdoor construction including retaining walls, pergolas, and structures",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/construction.jpg-BhBLgEEfbkyfNmDkQJmthXKQDvOw9B.jpeg",
              },
              {
                icon: Leaf,
                title: "Maintenance",
                description: "Ongoing garden care and landscape maintenance to keep your space pristine",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/maintance%20-2CuM37chzmh2ugsCRS0yuBjv53FpOv.jpeg",
              },
            ].map((service, index) => (
              <Card key={index} className="hover-lift border-border bg-card overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardContent className="p-6 text-center">
                  <service.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-serif font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Mitchell",
                location: "Toorak",
                rating: 5,
                text: "TK Landscapes transformed our backyard into an absolute masterpiece. The attention to detail and quality of work exceeded our expectations.",
              },
              {
                name: "David Chen",
                location: "Brighton",
                rating: 5,
                text: "Professional, reliable, and incredibly skilled. Our new deck and paving look amazing. Highly recommend TK Landscapes for any project.",
              },
              {
                name: "Emma Thompson",
                location: "Camberwell",
                rating: 5,
                text: "From design to completion, the team was fantastic. They understood our vision and delivered beyond what we imagined possible.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-border bg-card">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">About TK Landscapes</h2>
              <p className="text-lg text-muted-foreground mb-6">
                With over a decade of experience in Melbourne's landscaping industry, TK Landscapes has built a
                reputation for delivering exceptional outdoor transformations that enhance both the beauty and value of
                your property.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our team of skilled craftsmen combines traditional techniques with modern innovation to create outdoor
                spaces that are not only stunning but also built to last in Melbourne's unique climate.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-primary mr-3" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-primary mr-3" />
                  <span>10+ Years Experience</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-primary mr-3" />
                  <span>Local Melbourne Team</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-primary mr-3" />
                  <span>Quality Guarantee</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/D68EFD11-6310-4BE5-B390-506C3D4E8BBC.JPG-rqM75C5DCnksWMzokce25S7Qi0SLKT.jpeg"
                alt="TK Landscapes professional at work with pressure washer"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section id="instagram" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              View our latest jobs on Instagram
            </h2>
            <p className="text-xl text-muted-foreground">Follow our journey and see our latest projects</p>
          </div>
          <div className="text-center">
            <div className="bg-muted/50 border-2 border-border rounded-lg p-6 min-h-[500px]">
              <iframe
                src="https://widgets.commoninja.com/iframe/df6d6bcf-a469-4ed7-ac68-6c33100508ad"
                width="100%"
                height="500"
                frameBorder="0"
                scrolling="no"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "How long does a typical landscaping project take?",
                a: "Project timelines vary depending on scope and complexity. Small projects like garden beds may take 1-2 days, while complete landscape renovations can take 2-4 weeks. We'll provide a detailed timeline during consultation.",
              },
              {
                q: "Do you provide free quotes?",
                a: "Yes, we offer free, no-obligation consultations and quotes for all projects. We'll visit your property to assess the space and discuss your vision before providing a detailed proposal.",
              },
              {
                q: "What areas of Melbourne do you service?",
                a: "We service all areas across Melbourne and surrounding suburbs. Our team is familiar with local council requirements and climate considerations specific to different Melbourne regions.",
              },
              {
                q: "Do you handle council permits and approvals?",
                a: "Yes, we can assist with obtaining necessary permits and approvals for your project. We're experienced with Melbourne council requirements and will guide you through the process.",
              },
              {
                q: "What warranty do you provide on your work?",
                a: "We stand behind our work with comprehensive warranties. Structural work comes with a 5-year warranty, while plantings are covered for 12 months. Specific warranty terms are outlined in each project contract.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-border bg-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-serif font-bold mb-3">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground">
              Ready to transform your outdoor space? Let's discuss your project.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-6">Contact Information</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-primary mr-4" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-muted-foreground">0406 778 600</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-primary mr-4" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">tklandscapes29@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-primary mr-4" />
                  <div>
                    <p className="font-semibold">Service Area</p>
                    <p className="text-muted-foreground">Melbourne & Surrounding Suburbs</p>
                  </div>
                </div>
              </div>
              <div className="bg-muted/50 p-6 rounded-lg">
                <h4 className="font-serif font-bold mb-3">Business Hours</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>7:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-serif font-bold mb-6">Ready to Get Started?</h3>
                  <div className="space-y-6">
                    <p className="text-muted-foreground">
                      Contact us today for your free consultation and quote. We'll discuss your vision and provide
                      expert advice on transforming your outdoor space.
                    </p>
                    <div className="space-y-4">
                      <Button
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                        onClick={() => (window.location.href = "tel:0406778600")}
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Call 0406 778 600
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full bg-transparent"
                        onClick={() => (window.location.href = "mailto:tklandscapes29@gmail.com")}
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Email Us
                      </Button>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground text-center">
                        <strong>Free Consultations Available</strong>
                        <br />
                        We'll visit your property to discuss your project and provide a detailed quote at no cost.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">TK Landscapes</h3>
              <p className="text-background/80 mb-4">
                Creating beautiful outdoor spaces across Melbourne with expert craftsmanship and attention to detail.
              </p>
              <div className="flex space-x-4">
                <Badge variant="secondary" className="bg-background/20 text-background">
                  Licensed
                </Badge>
                <Badge variant="secondary" className="bg-background/20 text-background">
                  Insured
                </Badge>
              </div>
            </div>
            <div>
              <h4 className="font-serif font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-background/80">
                <li>Paving & Stonework</li>
                <li>Timber Decking</li>
                <li>Landscape Construction</li>
                <li>Garden Maintenance</li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif font-bold mb-4">Contact</h4>
              <div className="space-y-2 text-background/80">
                <p>Phone: 0406 778 600</p>
                <p>Email: tklandscapes29@gmail.com</p>
                <p>Melbourne, VIC</p>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
            <p>&copy; 2024 TK Landscapes. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Sticky Call Button for Mobile */}
      <div className="fixed bottom-4 right-4 md:hidden z-50">
        <Button
          size="lg"
          className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
          onClick={() => (window.location.href = "tel:0406778600")}
        >
          <Phone className="w-5 h-5" />
        </Button>
      </div>
    </div>
  )
}
