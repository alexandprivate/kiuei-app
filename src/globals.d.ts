// entities
interface Org {
  id: string;
  name: string;
  description: string;
  created: string;
  updated: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  created: string;
  updated: string;
}

interface Suite {
  id: string;
  name: string;
  description: string;
  created: string;
  updated: string;
}

interface Test {
  id: string;
  name: string;
  description: string;
  created: string;
  updated: string;
}

interface Command {
  name: string;
  type: 'assertion' | 'action';
  sentiment?: 'positive' | 'negative';
  commands: Record<
    string,
    { key: string; line: string; name: string; params: string[]; paramsNames: string[] }
  >;
}
