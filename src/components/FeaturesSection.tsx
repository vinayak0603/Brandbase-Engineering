import { Card, CardContent } from '@/components/ui/card'
import { Shield, Users, Zap, Award } from 'lucide-react'

export function FeaturesSection() {
    return (
        <section className="bg-background py-16 md:py-32">
            <div className="mx-auto max-w-3xl lg:max-w-5xl px-6">
                <div className="relative">
                    <div className="relative z-10 grid grid-cols-6 gap-3">
                        {/* Card 1: Precision/Quality */}
                        <Card className="relative col-span-full flex overflow-hidden lg:col-span-2 bg-card border-border">
                            <CardContent className="relative m-auto size-fit pt-6">
                                <div className="relative flex h-24 w-56 items-center justify-center">
                                    <Award className="size-20 text-primary/80" strokeWidth={1} />
                                    <span className="absolute text-3xl font-bold text-foreground mt-12">ISO</span>
                                </div>
                                <h2 className="mt-6 text-center text-3xl font-semibold text-foreground">Certified Quality</h2>
                                <p className="text-center text-muted-foreground mt-2">ISO 9001:2015 Certified Manufacturing</p>
                            </CardContent>
                        </Card>

                        {/* Card 2: Speed/Production */}
                        <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2 bg-card border-border">
                            <CardContent className="pt-6">
                                <div className="relative mx-auto flex aspect-square size-32 rounded-full border border-border before:absolute before:-inset-2 before:rounded-full before:border before:border-border/50">
                                    <Zap className="m-auto size-16 text-primary" strokeWidth={1.5} />
                                </div>
                                <div className="relative z-10 mt-14 space-y-2 text-center">
                                    <h2 className="text-lg font-medium transition text-foreground">Rapid Turnaround</h2>
                                    <p className="text-muted-foreground">From prototype to production in record time with our optimized workflows.</p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Card 3: Protection/IP */}
                        <Card className="relative col-span-full overflow-hidden lg:col-span-2 bg-card border-border">
                            <CardContent className="grid h-full pt-6">
                                <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                                    <div className="relative flex aspect-square size-12 rounded-full border border-border before:absolute before:-inset-2 before:rounded-full before:border before:border-border/50">
                                        <Shield className="m-auto size-5 text-primary" strokeWidth={1} />
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="text-lg font-medium text-foreground transition">IP Protection</h2>
                                        <p className="text-muted-foreground">Your designs and intellectual property are secure with our strict NDA protocols.</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Card 4: Engineering Team */}
                        <Card className="relative col-span-full overflow-hidden lg:col-span-6 bg-card border-border">
                            <CardContent className="grid h-full pt-6 sm:grid-cols-2 gap-8">
                                <div className="relative z-10 flex flex-col justify-center space-y-4">
                                    <div className="relative flex aspect-square size-12 rounded-full border border-border before:absolute before:-inset-2 before:rounded-full before:border before:border-border/50">
                                        <Users className="m-auto size-6 text-primary" strokeWidth={1} />
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="text-2xl font-medium transition text-foreground">Expert Engineering Team</h2>
                                        <p className="text-muted-foreground">
                                            Our dedicated team of engineers collaborates with you to optimize designs for manufacturability (DFM),
                                            ensuring cost-efficiency and superior product performance.
                                        </p>
                                    </div>
                                </div>
                                <div className="relative flex items-center justify-center p-6">
                                    {/* Placeholder for team visual or abstract graphic */}
                                    <div className="grid grid-cols-2 gap-4 w-full max-w-xs opacity-50">
                                        <div className="h-24 rounded-lg bg-primary/10 border border-primary/20"></div>
                                        <div className="h-24 rounded-lg bg-primary/20 border border-primary/30 mt-8"></div>
                                        <div className="h-24 rounded-lg bg-primary/30 border border-primary/40 -mt-8"></div>
                                        <div className="h-24 rounded-lg bg-primary/10 border border-primary/20"></div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
