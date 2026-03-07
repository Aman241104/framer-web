"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-[#050505] overflow-x-hidden font-sans relative">
            <Navbar />

            {/* Hero Header */}
            <section className="pt-40 pb-16 px-6 text-center max-w-2xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-8">
                    Term & Conditions
                </h1>
                <p className="text-[#A6A6A6] text-sm md:text-base leading-relaxed">
                    Welcome to VeeBran. By accessing or using our website and services, you
                    agree to comply with and be bound by the following terms and conditions.
                </p>
            </section>

            {/* Terms Content */}
            <section className="px-6 pb-24 md:pb-32 flex justify-center">
                <div className="w-full max-w-3xl flex flex-col gap-8 text-sm md:text-[15px] leading-relaxed text-[#A6A6A6]">

                    <div className="flex flex-col gap-3">
                        <h2 className="text-white font-semibold text-lg hover:text-white transition-colors">1. Acceptance of Terms</h2>
                        <p>
                            By using our website and services, you acknowledge that you have read, understood, and agree to be
                            bound by these Terms & Conditions. If you do not agree, please refrain from using our services.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h2 className="text-white font-semibold text-lg hover:text-white transition-colors">2. Services Overview</h2>
                        <p>
                            VeeBran specializes in AI-powered personal branding and automation solutions. We offer services including
                            but not limited to content creation, audience growth strategies, and performance optimization to help
                            brands thrive in the digital landscape.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h2 className="text-white font-semibold text-lg hover:text-white transition-colors">3. Intellectual Property Rights</h2>
                        <p>
                            All content, trademarks, logos, and intellectual property displayed on our website are the property of
                            VeeBran or its licensors. Unauthorized use, reproduction, or distribution is strictly prohibited.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h2 className="text-white font-semibold text-lg hover:text-white transition-colors">4. User Conduct</h2>
                        <p>Users agree not to:</p>
                        <ul className="list-disc pl-6 space-y-2 text-[#A6A6A6]">
                            <li>Use our services for any unlawful purposes.</li>
                            <li>Attempt to gain unauthorized access to our systems.</li>
                            <li>Disrupt or interfere with the security or functionality of our services.</li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h2 className="text-white font-semibold text-lg hover:text-white transition-colors">5. Payment Terms</h2>
                        <p>
                            Payments for our services are to be made as per the agreed-upon terms. Failure to make timely payments
                            may result in suspension or termination of services.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h2 className="text-white font-semibold text-lg hover:text-white transition-colors">6. Limitation of Liability</h2>
                        <p>
                            VeeBran shall not be held liable for any indirect, incidental, or consequential damages arising from the use
                            or inability to use our services.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h2 className="text-white font-semibold text-lg hover:text-white transition-colors">7. Termination</h2>
                        <p>
                            We reserve the right to terminate or suspend access to our services at our discretion, without prior notice,
                            for conduct that we believe violates these Terms & Conditions or is harmful to other users of our services,
                            us, or third parties, or for any other reason.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h2 className="text-white font-semibold text-lg hover:text-white transition-colors">8. Changes to Terms</h2>
                        <p>
                            VeeBran reserves the right to modify these Terms & Conditions at any time. Changes will be effective
                            immediately upon posting on our website. Continued use of our services constitutes acceptance of the
                            revised terms.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h2 className="text-white font-semibold text-lg hover:text-white transition-colors">9. Governing Law</h2>
                        <p>
                            These Terms & Conditions are governed by and construed in accordance with the laws of [Insert
                            Jurisdiction], without regard to its conflict of law principles.
                        </p>
                        <p className="mt-2">
                            If you have any questions or concerns regarding these Terms & Conditions, Please contact us.
                        </p>
                    </div>

                </div>
            </section>

            {/* Footer */}
            <Footer />
        </main>
    );
}
