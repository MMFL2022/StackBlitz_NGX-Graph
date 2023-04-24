import { Edge, Node, ClusterNode } from '@swimlane/ngx-graph';

export const nodes: Node[] = [
  {
    id: 'n1',
    label: 'depth:0'
  }, {
    id: 'n2',
    label: 'depth:0'
  }, {
    id: 'n3',
    label: 'timeStamp:0'
  }, {
    id: 'n4',
    label: 'iC1.1'
  }, {
    id: 'n5',
    label: 'iC1.2'
  }, {
    id: 'n6',
    label: 'oC1'
  }, {
    id: 'n7',
    label: 'iC2.1'
  }, {
    id: 'n8',
    label: 'iC2.2'
  }, {
    id: 'n9',
    label: 'oC2'
  }, {
    id: 'n10',
    label: 'iC3.1'
  }, {
    id: 'n11',
    label: 'iC3.2'
  }, {
    id: 'n12',
    label: 'oC3'
  }, {
    id: 'n13',
    label: 'i3'
  }, {
    id: 'n14',
    label: 'maximumDepth:0'
  }, {
    id: 'n15',
    label: 'placedLength:0'
  }, {
    id: 'n16',
    label: 'db3'
  }, {
    id: 'n17',
    label: 'iC4.1'
  }, {
    id: 'n18',
    label: 'iC4.2'
  }, {
    id: 'n19',
    label: 'oC4'
  }, {
    id: 'n20',
    label: 'amperage:0'
  }, {
    id: 'n21',
    label: 'amperage:0'
  }, {
    id: 'n22',
    label: 'minimumDepth:0'
  }, {
    id: 'n23',
    label: 'iC5.1'
  }, {
    id: 'n24',
    label: 'iC5.2'
  }, {
    id: 'n25',
    label: 'oC5'
  }, {
    id: 'n26',
    label: 'averageAmperage:0'
  }, {
    id: 'n27',
    label: 'h1'
  },
];

export const clusters: ClusterNode[] = [
  {
    id: 'cn1',
    label: 'Maximum : maximumDepth',
    childNodeIds: ['n4', 'n5', 'n6']
  }, {
    id: 'cn2',
    label: 'Minimum : minimumDepth',
    childNodeIds: ['n17', 'n18', 'n19']
  }, {
    id: 'cn3',
    label: 'SubtractAcross : treatmentLength',
    childNodeIds: ['n7', 'n8', 'n9']
  }, {
    id: 'cn4',
    label: 'C3',
    childNodeIds: ['n10', 'n11', 'n12']
  },
  {
    id: 'cn5',
    label: 'Penetration',
    childNodeIds: ['n1', 'n20', 'n3', 'n13']
  }, {
    id: 'cn6',
    label: 'Treatment',
    childNodeIds: ['n2', 'n21']
  },
  {
    id: 'cn7',
    label: 'Trace',
    childNodeIds: ['cn6', 'cn5']
  },
  {
    id: 'cn8',
    label: 'Header',
    childNodeIds:['n27']
  },
  {
    id: 'cn9',
    label: 'Element',
    childNodeIds: ['cn7', 'cn8']
  },
  {
    id: 'cn10',
    label: 'Average : Amperage',
    childNodeIds:[ 'n23', 'n24', 'n25']
  }
]

export const links: Edge[] = [
  {
    id: 'e1',
    source: 'n6',
    target: 'n14',
    label: 'Max Depth'
  }, {
    id: 'e2',
    source: 'n22',
    target: 'n8',
    label: 'Min Depth'
  }, {
    id: 'e3',
    source: 'n15',
    target: 'n10',
    label: 'Placed Length'
  }, {
    id: 'e4',
    source: 'n13',
    target: 'n11',
    label: 'custom label'
  }, {
    id: 'e5',
    source: 'n14',
    target: 'n7',
    label: 'Max Depth'
  }, {
    id: 'e6',
    source:'n9',
    target: 'n15',
    label: 'Placed Length'
  }, {
    id: 'e7',
    source: 'n12',
    target: 'n16',
    label: 'Value Y'
  }, {
    id: 'e8',
    source:'n1',
    target:'n4',
    label: 'Penetration Depth'
  }, {
    id: 'e9',
    source:'n2',
    target:'n5',
    label: 'Treatment Depth'
  }, {
    id: 'e10',
    source:'n1',
    target:'n17',
    label: 'Penetration Depth'
  }, {
    id: 'e11',
    source:'n2',
    target:'n18',
    label: 'Treatment Depth'
  }, {
    id: 'e12',
    source: 'n19',
    target: 'n22',
    label: 'Min Depth'
  }, {
    id: 'e13',
    source: 'n20',
    target: 'n23',
    label: 'Min Depth'
  }, {
    id: 'e14',
    source: 'n21',
    target: 'n24',
    label: 'Min Depth'
  }, {
    id: 'e15',
    source: 'n25',
    target: 'n26',
    label: 'Average Amperage'
  },
];