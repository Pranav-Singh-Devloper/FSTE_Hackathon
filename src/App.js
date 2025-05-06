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
                  name="Krishnadevan"
                  role="240101069"
                  photoUrl="/api/placeholder/150/150"
                />
                <TeamMember
                  name="Pranav Singh"
                  role="09345823423"
                  photoUrl="/api/placeholder/150/150"
                />
                <TeamMember
                  name="Nandi"
                  role="092384523t"
                  photoUrl="/api/placeholder/150/150"
                />
                <TeamMember
                  name="Hadole"
                  role="03498523"
                  photoUrl="/api/placeholder/150/150"
                />
                <TeamMember
                  name="1080"
                  role="9380457184274098"
                  photoUrl="/api/placeholder/150/150"
                />
              </div>
              <p className="mt-6 text-gray-400">
                Indian Institute of Education Innovation
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
                    description="75% of faculty report no formal training in interdisciplinary teaching methods."
                  />
                  <ResearchInsight
                    title="Structural Barriers"
                    description="Rigid departmental structures impede collaboration across disciplines."
                  />
                  <ResearchInsight
                    title="Course Flexibility"
                    description="Only 12% of programs offer genuinely flexible credit transfers between departments."
                  />
                </div>
              </Card>

              <Card title="Stakeholder Mapping">
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={stakeholderData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      barSize={20}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                      <XAxis dataKey="name" scale="band" stroke="#aaa" />
                      <YAxis
                        stroke="#aaa"
                        label={{
                          value: "Interest Level (%)",
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
                      <Bar
                        dataKey="value"
                        fill="#8884d8"
                        name="Stakeholder Interest"
                      />
                    </BarChart>
                  </ResponsiveContainer>
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
                      Download CLD Image
                    </button>
                  </div>
                </div>
                <div className="flex justify-center mb-4">
                  <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
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
                          Interdisciplinary Learning (+)
                        </span>
                        : Central outcome variable
                      </li>
                      <li>
                        <span className="text-blue-400">
                          Faculty Training (+)
                        </span>
                        : Positively impacts interdisciplinary education
                      </li>
                      <li>
                        <span className="text-green-400">
                          Curriculum Flexibility (+)
                        </span>
                        : Enables cross-disciplinary study
                      </li>
                      <li>
                        <span className="text-yellow-400">
                          Student Engagement (+)
                        </span>
                        : Both a driver and outcome of interdisciplinary
                        approaches
                      </li>
                      <li>
                        <span className="text-pink-400">
                          Industry Relevance (+)
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
                      <span className="font-semibold text-blue-400">
                        R1 (Reinforcing)
                      </span>
                      : Faculty training increases interdisciplinary learning,
                      which increases student engagement, which further drives
                      faculty training adoption.
                    </p>
                    <p>
                      <span className="font-semibold text-green-400">
                        R2 (Reinforcing)
                      </span>
                      : Curriculum flexibility enables interdisciplinary
                      learning, which increases industry relevance, which
                      creates pressure for more flexible curricula.
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
                      Students graduate with narrow specializations, lacking
                      cross-disciplinary skills required by industry.
                    </p>
                  </AnalysisItem>

                  <AnalysisItem
                    title="Pattern"
                    description="Continued separation of disciplines over years"
                    color="bg-gradient-to-r from-yellow-500 to-green-500"
                  >
                    <div className="h-72">
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
                  </AnalysisItem>

                  <AnalysisItem
                    title="Structure"
                    description="Departmental silos, rigid assessments, policy inaction"
                    color="bg-gradient-to-r from-blue-500 to-purple-500"
                  >
                    <ul className="list-disc list-inside space-y-1">
                      <li>
                        Traditional departmental structures with minimal
                        interaction
                      </li>
                      <li>Discipline-specific assessment formats</li>
                      <li>
                        Lack of incentives for cross-departmental collaboration
                      </li>
                      <li>Outdated accreditation requirements</li>
                      <li>Insufficient policy implementation guidance</li>
                    </ul>
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
                  <div className="p-4 bg-blue-900/30 border border-blue-800/50 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2 text-blue-300">
                      Academic Bank of Credits
                    </h3>
                    <p>
                      The NEP's proposed Academic Bank of Credits (ABC) can
                      serve as a powerful leverage point to enable true
                      interdisciplinary learning across institutions.
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
                  <div className="p-4 bg-purple-900/30 border border-purple-800/50 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2 text-purple-300">
                      "Fixes That Fail"
                    </h3>
                    <p>
                      Current approaches like adding token electives or optional
                      interdisciplinary seminars without structural changes
                      create temporary improvements but fail to address root
                      causes.
                    </p>
                  </div>
                  <div className="p-4 bg-yellow-900/30 border border-yellow-800/50 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2 text-yellow-300">
                      "Success to the Successful"
                    </h3>
                    <p>
                      Departments with higher funding and prestige continue to
                      attract resources, creating a self-reinforcing dynamic
                      that maintains the status quo and limits innovation.
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
                  <ResourceCard
                    title="Modeling Tool Screenshots"
                    icon={<PieChart size={24} />}
                    description="Vensim model development process"
                  />
                  <ResourceCard
                    title="Stakeholder Interview Transcripts"
                    icon={<FileText size={24} />}
                    description="Qualitative insights from education leaders"
                  />
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
                    <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors flex items-center">
                      <Download size={16} className="mr-1" />
                      Download
                    </button>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                    <div className="flex items-center">
                      <BarChart2 size={20} className="mr-3 text-purple-400" />
                      <span>CLD Model File (Vensim)</span>
                    </div>
                    <button className="px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors flex items-center">
                      <Download size={16} className="mr-1" />
                      Download
                    </button>
                  </div>
                </div>
              </Card>

              <Card title="Team Contact Information">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <ContactCard
                    name="Dr. Priya Sharma"
                    email="priya.sharma@iiei.edu.in"
                  />
                  <ContactCard
                    name="Prof. Rajiv Kumar"
                    email="rajiv.kumar@iiei.edu.in"
                  />
                  <ContactCard
                    name="Anjali Mehta"
                    email="anjali.mehta@iiei.edu.in"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-gray-400">
                    Project GitHub Repository:{" "}
                    <a
                      href="https://www.google.com/"
                      className="text-blue-400 hover:underline"
                    >
                      github.com/iiei/breaking-silos
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
            <p>
              &copy; 2025 Indian Institute of Education Innovation. All rights
              reserved.
            </p>
            <p className="mt-2">
              Created for the Systems Thinking in Education Conference
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
        <button className="mt-2 px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm flex items-center">
          <Download size={14} className="mr-1" />
          Download
        </button>
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
