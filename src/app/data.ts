import { Edge, Node, ClusterNode } from '@swimlane/ngx-graph';

export const nodes: Node[] = [
  {
    id: 'i1.1',
    label: 'i1.1'
  }, {
    id: 'i1.2',
    label: 'i1.2'
  }, {
    id: 'i2',
    label: 'i2'
  }, {
    id: 'iC1.1',
    label: 'iC1.1'
  }, {
    id: 'iC1.2',
    label: 'iC1.2'
  }, {
    id: 'oC1',
    label: 'oC1'
  }, {
    id: 'iC2.1',
    label: 'iC2.1'
  }, {
    id: 'iC2.2',
    label: 'iC2.2'
  }, {
    id: 'oC2',
    label: 'oC2'
  }, {
    id: 'iC3.1',
    label: 'iC3.1'
  }, {
    id: 'iC3.2',
    label: 'iC3.2'
  }, {
    id: 'oC3',
    label: 'oC3'
  }, {
    id: 'i3',
    label: 'i3'
  }, {
    id: 'db1',
    label: 'db1'
  }, {
    id: 'db2',
    label: 'db2'
  }, {
    id: 'db3',
    label: 'db3'
  }
];

export const clusters: ClusterNode[] = [
  {
    id: 'C1',
    label: 'Max Depth',
    childNodeIds: ['iC1.1', 'iC1.2', 'oC1']
  }, {
    id: 'C2',
    label: 'C2',
    childNodeIds: ['iC2.1', 'iC2.2', 'oC2']
  }, {
    id: 'C3',
    label: 'C3',
    childNodeIds: ['iC3.1', 'iC3.2', 'oC3']
  }
]

export const links: Edge[] = [
  {
    id: 'a',
    source: 'oC1',
    target: 'iC2.1',
    label: 'Max Depth'
  }, {
    id: 'b',
    source: 'i2',
    target: 'iC2.2',
    label: 'input 2'
  }, {
    id: 'c',
    source: 'oC2',
    target: 'iC3.1',
    label: 'custom label'
  }, {
    id: 'd',
    source: 'i3',
    target: 'iC3.2',
    label: 'custom label'
  }, {
    id:'e',
    source: 'oC1',
    target: 'db1',
    label: 'Max Depth'
  }, {
    id:'f',
    source:'oC2',
    target: 'db2',
    label: 'Value X'
  }, {
    id:'g',
    source: 'oC3',
    target: 'db3',
    label: 'Value Y'
  }, {
    id:'h',
    source:'i1.1',
    target:'iC1.1',
    label: 'Penetration Depth'
  }, {
    id:'i',
    source:'i1.2',
    target:'iC1.2',
    label: 'Treatment Depth'
  }
];