import { FiCpu, FiSettings, FiHelpCircle, FiBarChart, FiMonitor } from "react-icons/fi";

export interface SystemProps {
  id: number;
  name: string;
  slug: string;
  icon: React.ElementType;
}

const systems: SystemProps[] = [
  {
    id: 1,
    name: "Gestão de Recursos Humanos",
    slug: "rh",
    icon: FiCpu,
  },
  {
    id: 2,
    name: "Gerenciamento de Projetos",
    slug: "projects",
    icon: FiSettings,
  },
  {
    id: 3,
    name: "Controle Financeiro",
    slug: "financial",
    icon: FiBarChart,
  },
  {
    id: 4,
    name: "Monitoramento de Performance",
    slug: "performance",
    icon: FiMonitor,
  },
  {
    id: 5,
    name: "Help Desk",
    slug: "help-desk",
    icon: FiHelpCircle,
  },
];

export default systems;