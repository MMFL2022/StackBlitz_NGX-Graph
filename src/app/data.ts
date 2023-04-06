import { Edge, Node, ClusterNode } from '@swimlane/ngx-graph';

export const nodes: Node[] = [
  {
    id: 'i1.1',
    label: 'depth:0'
  }, {
    id: 'i1.2',
    label: 'depth:0'
  }, {
    id: 'i2',
    label: 'timeStamp:0'
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
    label: 'maximumDepth:0'
  }, {
    id: 'db2',
    label: 'placedLength:0'
  }, {
    id: 'db3',
    label: 'db3'
  }, {
    id: 'iC4.1',
    label: 'iC4.1'
  }, {
    id: 'iC4.2',
    label: 'iC4.2'
  }, {
    id: 'oC4',
    label: 'oC4'
  }, {
    id: 'i4.1',
    label: 'amperage:0'
  }, {
    id: 'i4.2',
    label: 'amperage:0'
  }, {
    id: 'db4',
    label: 'minimumDepth:0'
  }, {
    id: 'iC5.1',
    label: 'iC5.1'
  }, {
    id: 'iC5.2',
    label: 'iC5.2'
  }, {
    id: 'oC5',
    label: 'oC5'
  }, {
    id: 'db5',
    label: 'averageAmperage:0'
  }, {
    id: 'h1',
    label: 'h1'
  },
];

export const clusters: ClusterNode[] = [
  {
    id: 'C1',
    label: 'Maximum : maximumDepth',
    childNodeIds: ['iC1.1', 'iC1.2', 'oC1']
  }, {
    id: 'C4',
    label: 'Minimum : minimumDepth',
    childNodeIds: ['iC4.1', 'iC4.2', 'oC4']
  }, {
    id: 'C2',
    label: 'SubtractAcross : treatmentLength',
    childNodeIds: ['iC2.1', 'iC2.2', 'oC2']
  }, {
    id: 'C3',
    label: 'C3',
    childNodeIds: ['iC3.1', 'iC3.2', 'oC3']
  },
  {
    id: 'ePTrace1',
    label: 'Penetration',
    childNodeIds: ['i1.1', 'i4.1', 'i2', 'i3']
  }, {
    id: 'eTTrace1',
    label: 'Treatment',
    childNodeIds: ['i1.2', 'i4.2']
  },
  {
    id: 'eTrace',
    label: 'Trace',
    childNodeIds: ['eTTrace1', 'ePTrace1']
  },
  {
    id: 'eHeader',
    label: 'Header',
    childNodeIds:['h1']
  },
  {
    id: 'element',
    label: 'Element',
    childNodeIds: ['eTrace', 'eHeader']
  },
  {
    id: 'C5',
    label: 'Average : Amperage',
    childNodeIds:[ 'iC5.1', 'iC5.2', 'oC5']
  }
]

export const links: Edge[] = [
  {
    id: 'a',
    source: 'oC1',
    target: 'db1',
    label: 'Max Depth'
  }, {
    id: 'b',
    source: 'db4',
    target: 'iC2.2',
    label: 'Min Depth'
  }, {
    id: 'c',
    source: 'db2',
    target: 'iC3.1',
    label: 'Placed Length'
  }, {
    id: 'd',
    source: 'i3',
    target: 'iC3.2',
    label: 'custom label'
  }, {
    id:'e',
    source: 'db1',
    target: 'iC2.1',
    label: 'Max Depth'
  }, {
    id:'f',
    source:'oC2',
    target: 'db2',
    label: 'Placed Length'
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
  }, {
    id:'j',
    source:'i1.1',
    target:'iC4.1',
    label: 'Penetration Depth'
  }, {
    id:'k',
    source:'i1.2',
    target:'iC4.2',
    label: 'Treatment Depth'
  }, {
    id: 'l',
    source: 'oC4',
    target: 'db4',
    label: 'Min Depth'
  }, {
    id: 'm',
    source: 'i4.1',
    target: 'iC5.1',
    label: 'Min Depth'
  }, {
    id: 'n',
    source: 'i4.2',
    target: 'iC5.2',
    label: 'Min Depth'
  }, {
    id: 'o',
    source: 'oC5',
    target: 'db5',
    label: 'Average Amperage'
  },
];