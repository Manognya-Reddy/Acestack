import React from 'react'
export default function Footer() {
    return (
        <footer className="bg-body-tertiary text-center text-lg-start mt-5">
            <div className="container p-4">
                <div className="row">
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase fw-bold">AceStack</h5>
                        <p>
                            AceStack helps you prepare smarter for placements with structured
                            roadmaps, smart flashcards, and hand-picked resources — all in one
                            place. Learn with clarity. Prepare with confidence.
                        </p>
                    </div>

                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase fw-bold">What you get</h5>
                        <p>
                            • Clear DSA & CS roadmaps<br />
                            • Smart revision with flashcards<br />
                            • Curated interview resources<br />
                            • Built for students, by students
                        </p>
                    </div>
                </div>
            </div>

            <div
                className="text-center p-3"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
            >
                © {new Date().getFullYear()} AceStack · Built for placement success 🚀
            </div>
        </footer>
    );
}