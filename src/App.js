import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import {
  ChevronDown,
  ChevronUp,
  Download,
  FileText,
  Book,
  Home,
  BarChart2,
  Brain,
  Lightbulb,
  PieChart,
  Mail,
  Menu,
  X,
} from "lucide-react";
import cldImage from "./images/cld.png";

const handleScreenshots = () => {
  const link = document.createElement("a");
  link.href = "/Screenshots.zip"; // Use the imported image path
  link.download = "Screenshots.zip"; // Set the desired file name
  link.click();
};
const handleSFDownload = () => {
  const link = document.createElement("a");
  link.href = "/sfd.mdl"; // Use the imported image path
  link.download = "sfd.mdl"; // Set the desired file name
  link.click();
};
const handlePDF = () => {
  const link = document.createElement("a");
  link.href = "/team7.pdf"; // Use the imported image path
  link.download = "Team7_SystemsHackathon2025.pdf"; // Set the desired file name
  link.click();
};
const handleCLD = () => {
  const link = document.createElement("a");
  link.href = "/cld.mdl"; // Use the imported image path
  link.download = "cld.mdl"; // Set the desired file name
  link.click();
};
const handleDownloadModel = () => {
  const link = document.createElement("a");
  link.href = "/vensimModel.mdl"; // Use the imported image path
  link.download = "vensimModel.mdl"; // Set the desired file name
  link.click();
};
const handleDownloadImage = () => {
  const link = document.createElement("a");
  link.href = cldImage; // Use the imported image path
  link.download = "cld.png"; // Set the desired file name
  link.click();
};

// Mock data for charts
const trendData = [
  { year: 2018, interdisciplinary: 12, traditional: 78 },
  { year: 2019, interdisciplinary: 18, traditional: 75 },
  { year: 2020, interdisciplinary: 25, traditional: 70 },
  { year: 2021, interdisciplinary: 30, traditional: 65 },
  { year: 2022, interdisciplinary: 35, traditional: 60 },
  { year: 2023, interdisciplinary: 42, traditional: 55 },
  { year: 2024, interdisciplinary: 48, traditional: 52 },
];

const stakeholderData = [
  { name: "Students", value: 80 },
  { name: "Faculty", value: 45 },
  { name: "Admin", value: 30 },
  { name: "Regulators", value: 20 },
  { name: "Industry", value: 60 },
];

// Main component
export default function InterdisciplinaryEducationApp() {
  const [activeSection, setActiveSection] = useState("home");
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const scrollToSection = (section) => {
    setActiveSection(section);
    setShowMobileMenu(false);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "research",
        "model",
        "analysis",
        "insights",
        "bonus",
        "contact",
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-800 z-50 border-b border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold">Breaking Silos</span>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
              >
                {showMobileMenu ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex space-x-4">
              <NavLink
                active={activeSection === "home"}
                onClick={() => scrollToSection("home")}
                icon={<Home size={16} />}
                text="Home"
              />
              <NavLink
                active={activeSection === "research"}
                onClick={() => scrollToSection("research")}
                icon={<Book size={16} />}
                text="Research"
              />
              <NavLink
                active={activeSection === "model"}
                onClick={() => scrollToSection("model")}
                icon={<BarChart2 size={16} />}
                text="System Model"
              />
              <NavLink
                active={activeSection === "analysis"}
                onClick={() => scrollToSection("analysis")}
                icon={<PieChart size={16} />}
                text="Analysis"
              />
              <NavLink
                active={activeSection === "insights"}
                onClick={() => scrollToSection("insights")}
                icon={<Brain size={16} />}
                text="Insights"
              />
              <NavLink
                active={activeSection === "bonus"}
                onClick={() => scrollToSection("bonus")}
                icon={<Lightbulb size={16} />}
                text="Bonus"
              />
              <NavLink
                active={activeSection === "contact"}
                onClick={() => scrollToSection("contact")}
                icon={<Mail size={16} />}
                text="Contact"
              />
            </div>
          </div>
        </div>

        {/* Mobile navigation */}
        {showMobileMenu && (
          <div className="md:hidden bg-gray-800 pb-4 px-4">
            <MobileNavLink
              onClick={() => scrollToSection("home")}
              icon={<Home size={16} />}
              text="Home"
            />
            <MobileNavLink
              onClick={() => scrollToSection("research")}
              icon={<Book size={16} />}
              text="Research"
            />
            <MobileNavLink
              onClick={() => scrollToSection("model")}
              icon={<BarChart2 size={16} />}
              text="System Model"
            />
            <MobileNavLink
              onClick={() => scrollToSection("analysis")}
              icon={<PieChart size={16} />}
              text="Analysis"
            />
            <MobileNavLink
              onClick={() => scrollToSection("insights")}
              icon={<Brain size={16} />}
              text="Insights"
            />
            <MobileNavLink
              onClick={() => scrollToSection("bonus")}
              icon={<Lightbulb size={16} />}
              text="Bonus"
            />
            <MobileNavLink
              onClick={() => scrollToSection("contact")}
              icon={<Mail size={16} />}
              text="Contact"
            />
          </div>
        )}
      </nav>

      {/* Main content with offset for fixed navbar */}
      <div className="pt-16">
        {/* Home section */}
        <Section
          id="home"
          className="bg-gradient-to-b from-gray-800 to-gray-900"
        >
          <div className="max-w-4xl mx-auto text-center py-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Breaking Silos: Rethinking Interdisciplinary Learning in India
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Despite NEP 2020's vision for multidisciplinary education, most
              Indian higher education institutions still operate in rigid
              disciplinary silos.
            </p>
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
              <h2 className="text-2xl font-semibold mb-6">Team Introduction</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                <TeamMember
                  name="Krishnadevan Manju"
                  role="CLD, Research & SFD"
                  photoUrl="/krishna.png"
                />
                <TeamMember
                  name="Pranav Singh"
                  role="Website Building"
                  photoUrl="pranav.jpeg"
                />
                <TeamMember
                  name="Hemanth Tenneti"
                  role="Report Writing, Website, and CLD"
                  photoUrl="/hemanth.png"
                />
                <TeamMember
                  name="Somraj Nandi"
                  role="Research"
                  photoUrl="/somraj.jpeg"
                />
                <TeamMember
                  name="Omkar Hadole"
                  role="Research"
                  photoUrl="omkar.jpeg"
                />
              </div>
              <p className="mt-6 text-gray-400">
                Rishihood University, Sonipat, Haryana
              </p>
            </div>
          </div>
        </Section>

        {/* Research section */}
        <Section id="research" className="bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              icon={<Book size={24} />}
              title="Problem Framing & Research"
            />
            <div className="space-y-8">
              <Card title="NEP 2020 Vision">
                <p>
                  The National Education Policy 2020 envisions a complete
                  transformation of India's education system with an emphasis on
                  holistic, multidisciplinary education. Key goals include:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Flexible curriculum structures</li>
                  <li>Creative combinations of subjects</li>
                  <li>Integration of vocational education</li>
                  <li>Multiple entry/exit points</li>
                </ul>
              </Card>

              <Card title="Research Insights">
                <div className="space-y-4">
                  <ResearchInsight
                    title="Faculty Training Gaps"
                    description="Majority of the faculty report no formal training in interdisciplinary teaching methods."
                  />
                  <ResearchInsight
                    title="Structural Barriers"
                    description="Rigid departmental structures impede collaboration across disciplines."
                  />
                  <ResearchInsight
                    title="Course Flexibility"
                    description="Very little programs offer genuinely flexible credit transfers between departments."
                  />
                </div>
              </Card>
            </div>
          </div>
        </Section>

        {/* System Model section */}
        <Section id="model" className="bg-gray-800">
          <div className="max-w-4xl mx-auto">
            <SectionTitle icon={<BarChart2 size={24} />} title="System Model" />
            <div className="space-y-8">
              <Card title="Causal Loop Diagram (CLD)">
                <div className=" justify-center m-4">
                  <img src={cldImage} alt="CLD" />
                  <div className="flex justify-center m-4">
                    <button
                      onClick={handleDownloadImage}
                      className="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                    >
                      <Download size={16} className="mr-2" />
                      Download CLD
                    </button>
                  </div>
                </div>
                <div className="flex justify-center mb-4">
                  <button
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                    onClick={handleDownloadModel}
                  >
                    <Download size={16} className="mr-2" />
                    Download Vensim Model
                  </button>
                </div>
              </Card>

              <Card title="System Dynamics Explanation">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Key Variables & Polarity
                    </h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>
                        <span className="text-blue-400">
                          Interdisciplinary Learning
                        </span>
                        : Central outcome variable
                      </li>
                      <li>
                        <span className="text-blue-400">Faculty Training</span>:
                        Positively impacts interdisciplinary education
                      </li>
                      <li>
                        <span className="text-green-400">
                          Curriculum Flexibility
                        </span>
                        : Enables cross-disciplinary study
                      </li>
                      <li>
                        <span className="text-pink-400">
                          Industry Relevance
                        </span>
                        : Reinforces value of interdisciplinary skills
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Feedback Loops
                    </h3>
                    <p className="mb-2">
                      <span className="font-semibold text-red-400">
                        R1 (Reinforcing) Cultural Innovation Loop:{" "}
                      </span>
                      An increase in the Innovation Culture Index leads to an
                      increase in Administrative Willingness. This, in turn,
                      promotes greater Faculty Autonomy and Collaboration, which
                      increases Curriculum Flexibility. Greater curriculum
                      flexibility results in higher Interdisciplinary Learning
                      Participation, which further boosts the Innovation Culture
                      Index, completing the reinforcing loop.
                    </p>
                    <p>
                      <span className="font-semibold text-amber-400">
                        R2 (Reinforcing) Employability Trust Loop:{" "}
                      </span>
                      An increase in Interdisciplinary Learning Participation
                      improves the Employability Perception of interdisciplinary
                      graduates. As employability perception increases, the
                      Student Perceived Value of Interdisciplinary Learning also
                      increases. This heightened perception encourages more
                      students to participate in interdisciplinary learning,
                      thereby further increasing Interdisciplinary Learning
                      Participation.
                    </p>
                    <p>
                      <span className="font-semibold text-orange-400">
                        R3 (Reinforcing) Faculty-Incentive Loop:{" "}
                      </span>
                      An increase in the Reward System for Cross-Department Work
                      motivates more Faculty Autonomy and Collaboration. This
                      collaboration enhances Curriculum Flexibility, which
                      raises Interdisciplinary Learning Participation. As more
                      students participate, the demand and recognition for
                      interdisciplinary work rise, reinforcing the importance
                      and expansion of the reward system.
                    </p>
                    <p>
                      <span className="font-semibold text-yellow-400">
                        R4 (Reinforcing) Awareness Stakeholder Loop:{" "}
                      </span>
                      Stronger implementation of NEP 2020 leads to a wider
                      Awareness Campaign Reach. As awareness spreads, the
                      Student Perceived Value of Interdisciplinary Learning
                      improves. This positive student sentiment influences
                      Administrative Willingness, which fosters Faculty Autonomy
                      and Collaboration, enhancing Curriculum Flexibility. With
                      a more flexible curriculum, Interdisciplinary Learning
                      Participation increases, thus further strengthening the
                      call for NEP-aligned reforms and awareness.
                    </p>
                    <p>
                      <span className="font-semibold text-lime-400">
                        B1 (Balancing) Departmental Resistance Loop:{" "}
                      </span>
                      When Interdisciplinary Learning Participation rises,
                      departments begin to feel territorial and competitive,
                      increasing the Departmental Silo Intensity. This
                      resistance reduces Curriculum Flexibility, which then
                      limits further interdisciplinary participation, thus
                      counteracting the initial growth.
                    </p>
                    <p>
                      <span className="font-semibold text-green-400">
                        B2 (Balancing) Public Institution Constraint Loop:{" "}
                      </span>
                      An increase in the Public Sector University Autonomy Index
                      often corresponds with tighter state control, which lowers
                      Administrative Willingness. This drop reduces Faculty
                      Autonomy and Collaboration, thereby decreasing Curriculum
                      Flexibility and ultimately reducing Interdisciplinary
                      Learning Participation, opposing the intended effects of
                      reform.
                    </p>
                    <p>
                      <span className="font-semibold text-emerald-400">
                        B3 (Balancing) Administrative Friction Loop:{" "}
                      </span>
                      As Interdisciplinary Learning Participation increases, it
                      creates more administrative complexity, leading to greater
                      Academic Administrative Rigidity. This rigidity reduces
                      Curriculum Flexibility, which in turn discourages further
                      interdisciplinary participation, thereby balancing or
                      suppressing the initial increase.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Section>

        {/* System Analysis section */}
        <Section id="analysis" className="bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              icon={<PieChart size={24} />}
              title="System Analysis (EPS)"
            />
            <div className="space-y-8">
              <Card title="Event-Pattern-Structure Analysis">
                <div className="space-y-4">
                  <AnalysisItem
                    title="Event"
                    description="Limited interdisciplinary exposure in colleges"
                    color="bg-gradient-to-r from-red-500 to-orange-500"
                  >
                    <p>
                      Interdisciplinary programs introduced (e.g., in Shivnagar
                      University) fail to attract students or sustain faculty
                      engagement. Timetabling clashes, low enrollment, or
                      inadequate institutional support are common complaints.
                    </p>
                  </AnalysisItem>

                  <AnalysisItem
                    title="Pattern"
                    description="Continued separation of disciplines over years"
                    color="bg-gradient-to-r from-yellow-500 to-green-500"
                  >
                    <div className="h-96">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                          data={trendData}
                          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                          <XAxis dataKey="year" stroke="#aaa" />
                          <YAxis
                            stroke="#aaa"
                            label={{
                              value: "Percentage of Programs",
                              angle: -90,
                              position: "insideLeft",
                              fill: "#aaa",
                            }}
                          />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "#333",
                              borderColor: "#666",
                            }}
                            labelStyle={{ color: "#fff" }}
                          />
                          <Legend />
                          <Line
                            type="monotone"
                            dataKey="interdisciplinary"
                            stroke="#8884d8"
                            name="Interdisciplinary Programs"
                          />
                          <Line
                            type="monotone"
                            dataKey="traditional"
                            stroke="#82ca9d"
                            name="Traditional Siloed Programs"
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                    <p>
                      Repeated underperformance of interdisciplinary initiatives
                      across institutions. Initial enthusiasm fades; programs
                      are sidelined or dissolved. Students prefer established
                      disciplines with clearer career outcomes.
                    </p>
                  </AnalysisItem>

                  <AnalysisItem
                    title="Structure"
                    description="Departmental silos, rigid assessments, policy inaction"
                    color="bg-gradient-to-r from-blue-500 to-purple-500"
                  >
                    <p>
                      Fragmented governance across departments, rigid curricula,
                      lack of incentives for faculty collaboration, hierarchical
                      academic culture, and inadequate alignment between policy
                      and institutional operations. Accreditation and funding
                      mechanisms favor traditional departments.
                    </p>
                  </AnalysisItem>
                </div>
              </Card>
            </div>
          </div>
        </Section>

        {/* Insights section */}
        <Section id="insights" className="bg-gray-800">
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              icon={<Brain size={24} />}
              title="Insights & Interventions"
            />
            <div className="space-y-8">
              <Card title="What's Wrong with Current Solutions?">
                <div className="p-4 bg-red-900/30 border border-red-800/50 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-red-300">
                    Token Electives Without Structural Change
                  </h3>
                  <p>
                    Many institutions have attempted to implement
                    interdisciplinary education by simply adding a few elective
                    courses without addressing structural barriers. These
                    "bolt-on" approaches fail to create meaningful integration
                    between disciplines.
                  </p>
                </div>
              </Card>

              <Card title="Proposed Interventions">
                <div className="space-y-4">
                  <Intervention
                    title="Faculty Training Programs"
                    description="Comprehensive training for educators on interdisciplinary teaching methods and assessment strategies."
                  />
                  <Intervention
                    title="Interdepartmental Capstone Projects"
                    description="Final-year projects that require collaboration across departments with joint supervision."
                  />
                  <Intervention
                    title="Modular Credit-Based Learning System"
                    description="Flexible credit system allowing students to build personalized learning pathways across disciplines."
                  />
                </div>
              </Card>

              <Card title="Leverage Points">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-red-900/30 border border-red-800/50 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2 text-red-300">
                      Academic Advising Reforms
                    </h3>
                    <p>
                      Helps students make informed academic choices early on
                      which improves uptake and planning of interdisciplinary
                      pathways
                    </p>
                  </div>
                  <div className="p-4 bg-orange-900/30 border border-orange-800/50 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2 text-orange-300">
                      Evaluation Metric Redesign
                    </h3>
                    <p>
                      Aligns institutional rewards with interdisciplinary
                      teaching and learning outcomes which promotes system-wide
                      adoption and long-term sustainability of interdisciplinary
                      education
                    </p>
                  </div>
                  <div className="p-4 bg-blue-900/30 border border-blue-800/50 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2 text-blue-300">
                      Curriculum and Timetable Flexibility
                    </h3>
                    <p>
                      Alters institutional constraints that limit
                      interdisciplinary course access which enables students to
                      pursue combinations across disciplines more freely
                    </p>
                  </div>
                  <div className="p-4 bg-emerald-900/30 border border-emerald-800/50 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2 text-emerald-300">
                      Academic Bank of Credits
                    </h3>
                    <p>
                      The NEP's proposed Academic Bank of Credits (ABC) can
                      serve as a powerful leverage point to enable true
                      interdisciplinary learning across institutions.
                    </p>
                  </div>
                  <div className="p-4 bg-violet-900/30 border border-violet-800/50 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2 text-violet-300">
                      Faculty Incentives and Autonomy
                    </h3>
                    <p>
                      Changes internal motivation structure and encourages
                      interdisciplinary teaching which would mean more d faculty
                      would offer innovative and cross-cutting courses
                    </p>
                  </div>
                  <div className="p-4 bg-amber-900/30 border border-amber-800/50 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2 text-amber-300">
                      Awareness Through Success Narratives
                    </h3>
                    <p>
                      Shifts mental models and student demand by highlighting
                      benefits of interdisciplinarity which builds a reinforcing
                      loop of visibility, interest, and institutional support
                    </p>
                  </div>
                  <div className="p-4 bg-green-900/30 border border-green-800/50 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2 text-green-300">
                      Faculty Incentives
                    </h3>
                    <p>
                      Restructuring promotion criteria to reward
                      interdisciplinary teaching and research creates strong
                      incentives for system change.
                    </p>
                  </div>
                </div>
              </Card>

              <Card title="System Archetypes">
                <div className="space-y-4">
                  <div className="p-4 bg-red-900/30 border border-red-800/50 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2 text-red-300">
                      "Fixes That Fail"
                    </h3>
                    <p>
                      Current approaches like adding token electives or optional
                      interdisciplinary seminars without structural changes
                      create temporary improvements but fail to address root
                      causes.
                    </p>
                  </div>
                  <div className="p-4 bg-purple-900/30 border border-purple-800/50 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2 text-purple-300">
                      "Shifting the Burden"
                    </h3>
                    <p>
                      Institutions apply superficial fixes - like offering a few
                      interdisciplinary electives - without addressing deeper
                      barriers like departmental silos or rigid schedules. These
                      symptomatic solutions delay systemic reforms and reinforce
                      the idea that interdisciplinarity is non-essential.
                    </p>
                  </div>
                  <div className="p-4 bg-yellow-900/30 border border-yellow-800/50 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2 text-yellow-300">
                      "Success to the Successful"
                    </h3>
                    <p>
                      Well-established departments continue receiving support
                      and visibility, while interdisciplinary initiatives
                      struggle for resources. This self-reinforcing dynamic
                      widens the gap, keeping newer programs on the margins.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Section>

        {/* Bonus section */}
        <Section id="bonus" className="bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              icon={<Lightbulb size={24} />}
              title="Bonus Materials"
            />
            <div className="space-y-8">
              <Card title="Behavior Over Time Graphs (BOTs)">
                <div className="space-y-6">
                  {/* BOT Graph 1 */}
                  <div className="p-4 bg-gray-750 rounded-lg border border-gray-700">
                    <h3 className="text-lg font-semibold mb-3 text-blue-300">
                      Interdisciplinary Integration Over Time
                    </h3>
                    <div className="h-72">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                          data={[
                            { year: 2025, baseline: 20, intervention: 20 },
                            { year: 2026, baseline: 22, intervention: 28 },
                            { year: 2027, baseline: 24, intervention: 42 },
                            { year: 2028, baseline: 26, intervention: 55 },
                            { year: 2029, baseline: 28, intervention: 65 },
                            { year: 2030, baseline: 30, intervention: 72 },
                          ]}
                          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                          <XAxis dataKey="year" stroke="#aaa" />
                          <YAxis
                            stroke="#aaa"
                            domain={[0, 100]}
                            label={{
                              value: "Integration Level (%)",
                              angle: -90,
                              position: "insideLeft",
                              fill: "#aaa",
                            }}
                          />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "#333",
                              borderColor: "#666",
                            }}
                            labelStyle={{ color: "#fff" }}
                          />
                          <Legend />
                          <Line
                            type="monotone"
                            dataKey="baseline"
                            stroke="#82ca9d"
                            name="Baseline Scenario"
                            strokeWidth={2}
                          />
                          <Line
                            type="monotone"
                            dataKey="intervention"
                            stroke="#8884d8"
                            name="With Interventions"
                            strokeWidth={2}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                    <p className="mt-3 text-sm text-gray-400">
                      Projected change in interdisciplinary integration levels
                      with and without proposed interventions
                    </p>
                  </div>

                  {/* BOT Graph 2 */}
                  <div className="p-4 bg-gray-750 rounded-lg border border-gray-700">
                    <h3 className="text-lg font-semibold mb-3 text-green-300">
                      Faculty Collaboration Metrics
                    </h3>
                    <div className="h-72">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                          data={[
                            {
                              year: 2025,
                              crossDept: 15,
                              jointResearch: 8,
                              teachingTeams: 5,
                            },
                            {
                              year: 2026,
                              crossDept: 23,
                              jointResearch: 12,
                              teachingTeams: 10,
                            },
                            {
                              year: 2027,
                              crossDept: 32,
                              jointResearch: 18,
                              teachingTeams: 22,
                            },
                            {
                              year: 2028,
                              crossDept: 45,
                              jointResearch: 30,
                              teachingTeams: 35,
                            },
                            {
                              year: 2029,
                              crossDept: 58,
                              jointResearch: 46,
                              teachingTeams: 48,
                            },
                            {
                              year: 2030,
                              crossDept: 70,
                              jointResearch: 65,
                              teachingTeams: 60,
                            },
                          ]}
                          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                          <XAxis dataKey="year" stroke="#aaa" />
                          <YAxis
                            stroke="#aaa"
                            domain={[0, 100]}
                            label={{
                              value: "Percentage of Faculty",
                              angle: -90,
                              position: "insideLeft",
                              fill: "#aaa",
                            }}
                          />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "#333",
                              borderColor: "#666",
                            }}
                            labelStyle={{ color: "#fff" }}
                          />
                          <Legend />
                          <Line
                            type="monotone"
                            dataKey="crossDept"
                            stroke="#ff7300"
                            name="Cross-Dept. Meetings"
                            strokeWidth={2}
                          />
                          <Line
                            type="monotone"
                            dataKey="jointResearch"
                            stroke="#0088fe"
                            name="Joint Research"
                            strokeWidth={2}
                          />
                          <Line
                            type="monotone"
                            dataKey="teachingTeams"
                            stroke="#00C49F"
                            name="Teaching Teams"
                            strokeWidth={2}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                    <p className="mt-3 text-sm text-gray-400">
                      Faculty collaboration metrics projected to increase with
                      implementation of training programs
                    </p>
                  </div>

                  {/* BOT Graph 3 */}
                  <div className="p-4 bg-gray-750 rounded-lg border border-gray-700">
                    <h3 className="text-lg font-semibold mb-3 text-purple-300">
                      Student Outcomes Comparison
                    </h3>
                    <div className="h-72">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                          data={[
                            {
                              year: 2025,
                              traditional: 65,
                              interdisciplinary: 70,
                            },
                            {
                              year: 2026,
                              traditional: 66,
                              interdisciplinary: 75,
                            },
                            {
                              year: 2027,
                              traditional: 67,
                              interdisciplinary: 79,
                            },
                            {
                              year: 2028,
                              traditional: 68,
                              interdisciplinary: 84,
                            },
                            {
                              year: 2029,
                              traditional: 69,
                              interdisciplinary: 88,
                            },
                            {
                              year: 2030,
                              traditional: 70,
                              interdisciplinary: 92,
                            },
                          ]}
                          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                          <XAxis dataKey="year" stroke="#aaa" />
                          <YAxis
                            stroke="#aaa"
                            domain={[50, 100]}
                            label={{
                              value: "Employment Rate (%)",
                              angle: -90,
                              position: "insideLeft",
                              fill: "#aaa",
                            }}
                          />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "#333",
                              borderColor: "#666",
                            }}
                            labelStyle={{ color: "#fff" }}
                          />
                          <Legend />
                          <Line
                            type="monotone"
                            dataKey="traditional"
                            stroke="#ff7300"
                            name="Traditional Programs"
                            strokeWidth={2}
                          />
                          <Line
                            type="monotone"
                            dataKey="interdisciplinary"
                            stroke="#8884d8"
                            name="Interdisciplinary Programs"
                            strokeWidth={2}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                    <p className="mt-3 text-sm text-gray-400">
                      Post-graduation employment rates comparing traditional vs.
                      interdisciplinary program graduates
                    </p>
                  </div>
                </div>
              </Card>

              <Card title="Additional Resources">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ResourceCard
                    title="Stock & Flow Diagrams"
                    icon={<BarChart2 size={24} />}
                    description="Full system dynamics model with quantitative relationships"
                  />
                  <button
                    className="border-2 border-gray-500 rounded-full hover:bg-white hover:text-gray-900 transition-colors px-4 py-2"
                    onClick={handleSFDownload}
                  >
                    Click here to download SFD
                  </button>
                  <ResourceCard
                    title="Modeling Tool Screenshots"
                    icon={<PieChart size={24} />}
                    description="Vensim model development process"
                  />
                  <button
                    className="border-2 border-gray-500 rounded-full hover:bg-white hover:text-gray-900 transition-colors px-4 py-2"
                    onClick={handleScreenshots}
                  >
                    Click here to download screenshots
                  </button>
                </div>
              </Card>
            </div>
          </div>
        </Section>

        {/* Contact section */}
        <Section id="contact" className="bg-gray-800">
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              icon={<Mail size={24} />}
              title="Submission & Contact"
            />
            <div className="space-y-8">
              <Card title="Project Materials">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                    <div className="flex items-center">
                      <FileText size={20} className="mr-3 text-blue-400" />
                      <span>Final Report (PDF)</span>
                    </div>
                    <button
                      className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors flex items-center"
                      onClick={handlePDF}
                    >
                      <Download size={16} className="mr-1" />
                      Download
                    </button>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                    <div className="flex items-center">
                      <BarChart2 size={20} className="mr-3 text-purple-400" />
                      <span>CLD Model File (Vensim)</span>
                    </div>
                    <button
                      className="px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors flex items-center"
                      onClick={handleCLD}
                    >
                      <Download size={16} className="mr-1" />
                      Download
                    </button>
                  </div>
                </div>
              </Card>

              <Card title="Team Contact Information">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <ContactCard
                    name="Hemanth Tenneti"
                    email="hemanth.tenneti2024@nst.rishihood.edu.in"
                  />
                  <ContactCard
                    name="Pranav Singh"
                    email="pranav.singh2024@nst.rishihood.edu.in"
                  />
                  <ContactCard
                    name="Krishnadevan M.L"
                    email="krishnadevan.liby2024@nst.rishihood.edu.in"
                  />
                  <ContactCard
                    name="Omkar Hadole"
                    email="omkar.hadole2024@nst.rishihood.edu.in"
                  />
                  <ContactCard
                    name="Somraj Nandi"
                    email="somraj.nandi2024@nst.rishihood.edu.in"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-gray-400">
                    Project GitHub Repository:{" "}
                    <a
                      href="https://github.com/Pranav-Singh-Devloper/FSTE_Hackathon"
                      className="text-blue-400 hover:underline"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Link Here
                    </a>
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </Section>

        {/* Footer */}
        <footer className="bg-gray-900 border-t border-gray-800 py-8">
          <div className="max-w-4xl mx-auto px-4 text-center text-gray-400">
            <p className="mt-2">
              Created for Systems Thinking Hackathon 2025, Rishihood University
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

// Helper components
function NavLink({ active, onClick, icon, text }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        active
          ? "bg-gray-700 text-white"
          : "text-gray-300 hover:bg-gray-700 hover:text-white"
      }`}
    >
      {icon && <span className="mr-1">{icon}</span>}
      {text}
    </button>
  );
}

function MobileNavLink({ onClick, icon, text }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center w-full px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
    >
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </button>
  );
}

function Section({ id, children, className = "" }) {
  return (
    <section id={id} className={`py-16 ${className}`}>
      <div className="px-4">{children}</div>
    </section>
  );
}

function SectionTitle({ icon, title }) {
  return (
    <div className="flex items-center mb-8">
      {icon && <span className="mr-3 text-blue-400">{icon}</span>}
      <h2 className="text-3xl font-bold">{title}</h2>
    </div>
  );
}

function Card({ title, children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg border border-gray-700 overflow-hidden">
      <button
        className="flex items-center justify-between w-full p-4 border-b border-gray-700 bg-gray-800 hover:bg-gray-750 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-semibold">{title}</h3>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
}

function TeamMember({ name, role, photoUrl }) {
  return (
    <div className="p-4 bg-gray-750 rounded-lg text-center border border-gray-700 hover:border-blue-500 transition-colors">
      <div className="flex justify-center mb-3">
        <img
          src={photoUrl}
          alt={name}
          className="w-20 h-20 rounded-full object-cover"
        />
      </div>
      <h3 className="font-semibold text-blue-300">{name}</h3>
      <p className="text-gray-400 text-sm">{role}</p>
    </div>
  );
}

function ResearchInsight({ title, description }) {
  return (
    <div className="p-3 bg-gray-750 rounded border border-gray-700">
      <h4 className="font-semibold text-blue-300">{title}</h4>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
}

function AnalysisItem({ title, description, color, children }) {
  return (
    <div className="border border-gray-700 rounded-lg overflow-hidden">
      <div className={`p-3 ${color} text-white`}>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p>{description}</p>
      </div>
      <div className="p-4 bg-gray-750">{children}</div>
    </div>
  );
}

function Intervention({ title, description }) {
  return (
    <div className="p-4 bg-blue-900/30 border border-blue-800/50 rounded-lg">
      <h3 className="text-lg font-semibold mb-1 text-blue-300">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

function ResourceCard({ title, icon, description }) {
  return (
    <div className="p-4 bg-gray-750 rounded-lg border border-gray-700 flex">
      <div className="mr-3 text-blue-400">{icon}</div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
}

function ContactCard({ name, email }) {
  return (
    <div className="p-4 bg-gray-750 rounded-lg border border-gray-700 text-center">
      <h3 className="font-semibold">{name}</h3>
      <p className="text-blue-400 text-sm break-all">{email}</p>
    </div>
  );
}
