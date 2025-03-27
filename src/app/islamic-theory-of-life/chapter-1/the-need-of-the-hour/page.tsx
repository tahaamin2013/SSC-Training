import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const PhilosophyPages = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with gradient overlay */}
      <div className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 py-24">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-10" />
        <div className="relative max-w-5xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
            The Need of the Hour
          </h1>
          <div className="w-24 h-1 bg-emerald-500 mb-8" />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="space-y-16">
          {/* First Section */}
          <section className="space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl leading-relaxed text-slate-700">
                What we have discussed is not only a demand of the inner state
                of human civilization but also a result of certain external
                factors that are pulling us in this direction. The first factor
                is the modern concept of the state. Today&apos;s state, as a result
                of a silent political revolution, has become an all-encompassing
                entity. It is no longer a limited administrative state as
                envisioned by thinkers like James Stuart Mill and Lord
                Melbourne.
              </p>

              <div className="my-12 pl-8 border-l-4 border-emerald-500">
                <p className="text-2xl font-light italic text-slate-600">
                  Modern states have expanded their role far beyond
                  administration. Now, they adopt policies in every field,
                  shaping education, society, media, and the economy.
                </p>
              </div>

              <p className="text-xl leading-relaxed text-slate-700">
                A state based on merely negative concepts cannot sustain itself.
                Secularism and unbridled liberalism are not the solutions to
                today&apos;s problems. If you exclude religion from life, what will
                you do then? Secularism offers no constructive program.
                Liberalism, at best, enables rebellion against traditions and
                the past, but it fails to provide a positive framework for life.
              </p>

              <p className="text-xl leading-relaxed text-slate-700">
                Democracy, too, offers only a guideline: &quot;Do what the people
                want.&quot; But what if the people have no positive vision or
                constructive agenda? What can they achieve? As you reflect on
                this, it becomes clear that modern philosophies fail to provide
                a healthy worldview, while a worldview is now as essential for
                individuals and states as air and water are for human beings.
                Without it, the existence of a state becomes meaningless.
              </p>

              <p className="text-xl leading-relaxed text-slate-700">
                This is why many political thinkers refer to the modern state as
                an &quot;ideological state.&quot;
              </p>
            </div>
          </section>

          {/* Divider */}
          <div className="flex items-center justify-center">
            <div className="w-full h-px bg-slate-200" />
            <div className="px-4">
              <div className="w-4 h-4 rotate-45 bg-emerald-500" />
            </div>
            <div className="w-full h-px bg-slate-200" />
          </div>

          {/* Second Section */}
          <section className="space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl leading-relaxed text-slate-700">
                Another aspect to consider is that technological and mechanical
                advancements have unified previously scattered islands of human
                life. Modern means of transportation have eliminated
                geographical distances, and tools like education, propaganda,
                radio, and mass communication have interconnected all aspects of
                life. The conquest of time and space has stretched the
                boundaries of the earth.
              </p>

              <p className="text-xl leading-relaxed text-slate-700">
                Today, the entire world is becoming one city, and humanity is
                forming into one family. In this age of global unity, all
                philosophies of division and fragmentation that have been
                humanity&apos;s intellectual inheritance until now have become
                irrelevant. The new era calls out to the fragmented philosophies
                of the West:
              </p>

              <div className="my-12 bg-slate-50 p-8 rounded-lg border border-slate-200">
                <p className="text-2xl font-light italic text-slate-700 text-center">
                &quot;Let me be honest, if you won&apos;t mind - <br />
                  Your idols are no longer your own.&quot;
                </p>
              </div>

              <p className="text-xl leading-relaxed text-slate-700">
                The world now needs an ideology that can transform diversity
                into unity, teach humanity how to live in this new global
                context, and guide us in using our newfound powers for
                construction and progress. Without such an ideology, there is a
                serious danger that everything humanity has achieved so far will
                be destroyed by the very philosophies of hatred, divisiveness,
                and parochialism that have brought us to this point.
              </p>

              <p className="text-xl leading-relaxed text-slate-700">
                The same bold thought that has uncovered nature&apos;s secrets now
                threatens humanity with the very forces it has unleashed. The
                restless lightning of this progress could burn down the nest we
                call home.
              </p>
            </div>
          </section>
        </div>
      </div>
      <PlantUMLDiagram
        code={`
 @startmindmap
<style>
mindmapDiagram {
    node {
        BackgroundColor lightblue
        BorderColor blue
    }
    :depth(1) {
        BackgroundColor lightgreen
        BorderColor green
    }
    :depth(2) {
        BackgroundColor salmon
        BorderColor red
    }
    :depth(3) {
        BackgroundColor lightyellow
        BorderColor orange
    }
}
</style>

* The Need of the Hour

** Modern State Evolution
*** Expanded Beyond Administration
**** Education
**** Society
**** Media
**** Economy
*** Limitations of Current Systems
**** Secularism's lack of constructive program
**** Liberalism's rebellion without framework
**** Democracy's dependence on public vision


** Technological Impact
*** Breaking Geographic Barriers
**** Modern transportation
**** Mass communication
**** Education systems
**** Propaganda tools
*** Global Unification
**** World as one city
**** Humanity as one family
**** Conquest of time and space

left side
** Current Challenges
*** Philosophical Inadequacy
**** Old systems becoming irrelevant
**** Need for unified worldview
**** Danger of fragmented thinking
*** Power Management
**** Control of natural forces
**** Risk of destruction
**** Need for responsible progress

** Future Requirements
*** Unified Ideology
**** Transform diversity to unity
**** Guide global living
**** Direct technological power
*** Constructive Framework
**** Beyond mere rebellion
**** Progressive vision
**** Sustainable solutions

@endmindmap
          `}
      />
    </div>
  );
};

export default PhilosophyPages;
