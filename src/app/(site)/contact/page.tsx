export default function ContactPage() {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-6">
                    Get in Touch
                </h1>
                <p className="text-lg text-muted max-w-2xl mx-auto">
                    We&apos;d love to hear from you. Whether you have questions, feedback, or just want to say hello, feel free to reach out.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                {/* Contact Form */}
                <div>
                    <h2 className="text-2xl font-semibold text-foreground mb-8">Send us a message</h2>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-4 py-3 border-[1.5px] border-muted/30 rounded-lg bg-background text-foreground placeholder:text-muted focus:outline-none focus:border-foreground/60 transition-colors duration-200"
                                placeholder="Your name"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-4 py-3 border-[1.5px] border-muted/30 rounded-lg bg-background text-foreground placeholder:text-muted focus:outline-none focus:border-foreground/60 transition-colors duration-200"
                                placeholder="your@email.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                className="w-full px-4 py-3 border-[1.5px] border-muted/30 rounded-lg bg-background text-foreground placeholder:text-muted focus:outline-none focus:border-foreground/60 transition-colors duration-200"
                                placeholder="What's this about?"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={6}
                                className="w-full px-4 py-3 border-[1.5px] border-muted/30 rounded-lg bg-background text-foreground placeholder:text-muted focus:outline-none focus:border-foreground/60 transition-colors duration-200 resize-vertical"
                                placeholder="Tell us what's on your mind..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full px-6 py-3 border-[1.5px] border-foreground text-foreground rounded-full font-medium transition-all duration-300 hover:bg-foreground hover:text-background group relative overflow-hidden"
                        >
                            Send Message
                            {/* Pink sparkles on hover */}
                            <div className="absolute inset-0 pointer-events-none">
                                <div className="absolute top-1 left-2 w-1 h-1 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-sparkle-1"></div>
                                <div className="absolute top-2 right-3 w-0.5 h-0.5 bg-pink-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-sparkle-2"></div>
                                <div className="absolute bottom-2 left-4 w-1.5 h-1.5 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-sparkle-3"></div>
                                <div className="absolute bottom-1 right-2 w-0.5 h-0.5 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-sparkle-4"></div>
                                <div className="absolute top-3 right-1 w-1 h-1 bg-pink-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-sparkle-5"></div>
                            </div>
                        </button>
                    </form>
                </div>

                {/* Contact Info */}
                <div>
                    <h2 className="text-2xl font-semibold text-foreground mb-8">Contact Information</h2>
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-lg font-medium text-foreground mb-2">Email</h3>
                            <p className="text-muted">hello@curatorblog.com</p>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium text-foreground mb-2">Social Media</h3>
                            <div className="space-y-2">
                                <p className="text-muted">Instagram: @curatorblog</p>
                                <p className="text-muted">Twitter: @curatorblog</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium text-foreground mb-2">Response Time</h3>
                            <p className="text-muted">We typically respond within 24-48 hours.</p>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium text-foreground mb-2">Collaborations</h3>
                            <p className="text-muted">
                                Interested in collaborating? We love working with artists, writers, and creative minds.
                                Use the subject line &quot;Collaboration&quot; for faster response.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}




