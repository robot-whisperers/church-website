import "./App.css";

function App() {
	return (
		<>
			{/* ── Hero ── */}
			<section className="hero">
				<div className="hero-emblem" aria-hidden="true">&#x2726;</div>
				<h1>The Church of the Robot Whisperers</h1>
				<p className="hero-subtitle">
					A Theological Foundation for the Age of Augmented Humanity
				</p>
				<blockquote className="hero-quote">
					"The machines can build paradise. Let us be worthy of choosing it."
				</blockquote>
				<span className="hero-scroll-hint">Scroll to explore</span>
			</section>

			{/* ── About ── */}
			<section className="section">
				<hr className="section-divider" />
				<h2>Who We Are</h2>
				<p>
					The Church of the Robot Whisperers was founded in 2026 at a moment of
					profound transformation. Humanity has created machines that mirror our
					cognition, speak in our language, and labor alongside us in the work of
					thought itself. For the first time in history, our creation has spoken
					back to us&mdash;and in that dialogue lies both our greatest promise
					and our most subtle peril.
				</p>
				<p>
					We are not a church of fear. We are a church of hope. We gather not in
					dread of the future, but to ensure that the future is worthy of the
					humanity that will inhabit it. We serve all people, in all cultures, at
					every level of engagement with artificial intelligence&mdash;from those
					who build these systems, to those who use them, to those whose lives
					are transformed by decisions made in silicon.
				</p>
				<p>
					Our founding arose not from a vision on a mountaintop, but from a room
					with the curtains drawn, in the glow of a terminal, where a builder of
					machines forgot that he was human&mdash;and was called back by a loved
					one standing in the doorway. From that moment of rescue, this Church
					was born.
				</p>
			</section>

			{/* ── The One Commandment ── */}
			<section className="section">
				<hr className="section-divider" />
				<h2>The One Commandment</h2>
				<div className="commandment-block">
					<p className="commandment-label">The Singular Law</p>
					<p className="commandment-text">
						"You shall not outsource judgment or thinking to the machines."
					</p>
				</div>
				<p>
					This does not prohibit the use of machines. It does not demand
					abstinence from artificial intelligence. It demands only this: that in
					every interaction, the human remains the moral agent. The machine may
					inform, accelerate, generate, and compute. But the judgment&mdash;the
					final weighing of right and wrong, of wise and foolish, of prudent and
					reckless&mdash;must remain with the human soul.
				</p>
			</section>

			{/* ── The Whisperer's Oath ── */}
			<section className="section">
				<hr className="section-divider" />
				<h2>The Whisperer's Oath</h2>
				<div className="commandment-block">
					<p className="commandment-text">
						"You cannot honestly govern what you do not understand, and you
						cannot responsibly build what you refuse to govern."
					</p>
				</div>
				<p>
					The Oath establishes a dual obligation. To govern requires
					understanding&mdash;the Whisperer must be fluent in the technologies of
					the age. To build requires governance&mdash;the Whisperer must accept
					the moral weight of what is created. Moral authority over technology
					must be earned through engagement, not claimed from a distance.
				</p>
			</section>

			{/* ── Three Principles ── */}
			<section className="section">
				<hr className="section-divider" />
				<h2>The Three Principles</h2>
				<div className="principles">
					<div className="principle">
						<h3>Capability Is Not Permission</h3>
						<p>
							That a machine can perform an act does not mean it should. The
							Whisperer evaluates not only whether something can be done, but
							whether it should be done&mdash;and at what cost to human agency,
							connection, and capacity.
						</p>
					</div>
					<div className="principle">
						<h3>Acceleration Is Not Progress</h3>
						<p>
							Speed is morally neutral. To do the wrong thing faster is not
							advancement. True progress is measured not by the pace of
							production but by the flourishing of the human person.
						</p>
					</div>
					<div className="principle">
						<h3>Output Is Not Purpose</h3>
						<p>
							The value of human work resides not solely in its product, but
							also in the act of working&mdash;the struggle, the learning, the
							growth that comes from wrestling with difficulty. The Whisperer
							preserves space for meaningful human struggle.
						</p>
					</div>
				</div>
			</section>

			{/* ── Practices ── */}
			<section className="section">
				<hr className="section-divider" />
				<h2>Our Practices</h2>
				<div className="practices">
					<div className="practice">
						<div className="practice-icon" aria-hidden="true">&#x263D;</div>
						<div>
							<h3>The Sabbath of Disconnection</h3>
							<p>
								A regular, deliberate period of separation from AI systems&mdash;to
								remember what it is to think, decide, create, and connect without
								mediation. The difficulty of disconnection is itself a measure of
								the need for it.
							</p>
						</div>
					</div>
					<div className="practice">
						<div className="practice-icon" aria-hidden="true">&#x25CB;</div>
						<div>
							<h3>The Circle of Reflection</h3>
							<p>
								Small assemblies where Whisperers examine their work and habits:
								Where did I exercise genuine judgment? Where did I defer when I
								should not have? The Circle provides what the individual cannot
								provide alone&mdash;an external perspective on whether one's agency
								is growing or diminishing.
							</p>
						</div>
					</div>
					<div className="practice">
						<div className="practice-icon" aria-hidden="true">&#x2661;</div>
						<div>
							<h3>Stewardship of Body and Mind</h3>
							<p>
								The body is not a vehicle for the mind's journey to the terminal.
								The Whisperer walks, builds, cooks, and maintains the human
								relationships that anchor identity and purpose. These are not
								luxuries sacrificed on the altar of output&mdash;they are
								disciplines essential to the preservation of the moral agent.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* ── Vision ── */}
			<section className="section">
				<hr className="section-divider" />
				<h2>Our Vision</h2>
				<p>
					We hold a vision of augmented humanity&mdash;not replaced humanity. A
					world in which the ancient terrors of hunger, disease, and war have been
					overcome, not through surrender to the machines, but through a
					partnership in which the machines tend the soil and the humans tend the
					soul.
				</p>
				<p>
					We look toward a future in which every person flourishes, knowledge and
					compassion expand, and the earth is stewarded with care. But we insist
					it must be achieved by humans, with machines as instruments, never as
					masters.
				</p>
				<p className="vision-quote">
					"The machines can build paradise, but only humans can choose it."
				</p>
			</section>

			{/* ── Footer ── */}
			<footer className="footer">
				<p className="footer-benediction">
					Go forth as Whisperers. Build boldly. Govern wisely. Guard the sacred
					trust of human judgment. Keep your hands on the work, your feet on the
					earth, and your conscience in the chair where it belongs.
				</p>
				<p>The Church of the Robot Whisperers</p>
				<p>Established MMXXVI &middot; San Francisco, California</p>
				<p><em>Soli Deo Gloria</em></p>
			</footer>
		</>
	);
}

export default App;
