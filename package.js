Package.describe({
  name: 'shadyendless:react-bootstrap',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'A Meteor wrapper for the React-Bootstrap project.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/shadyendless/meteor-react-bootstrap',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  'externalify': '0.1.0',
  'react-bootstrap': '0.25.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2-rc.12');
  api.use('ecmascript');
  api.use(['react@0.1.7', 'cosmos:browserify@0.5.0'], 'client');

  api.addFiles([
    'react-bootstrap.browserify.js',
    'react-bootstrap.browserify.options.json'
  ], 'client');

  api.addFiles(['window.react.js'], 'client');

  api.export('Accordion', 'client');
  api.export('Affix', 'client');
  api.export('AffixMixin', 'client');
  api.export('Alert', 'client');
  api.export('Badge', 'client');
  api.export('BootstrapMixin', 'client');
  api.export('Button', 'client');
  api.export('ButtonGroup', 'client');
  api.export('ButtonInput', 'client');
  api.export('ButtonToolbar', 'client');
  api.export('Carousel', 'client');
  api.export('CarouselItem', 'client');
  api.export('Col', 'client');
  api.export('Collapse', 'client');
  api.export('CollapsibleMixin', 'client');
  api.export('CollapsibleNav', 'client');
  api.export('Dropdown', 'client');
  api.export('DropdownButton', 'client');
  api.export('DropdownMenu', 'client');
  api.export('DropdownToggle', 'client');
  api.export('Fade', 'client');
  api.export('FadeMixin', 'client');
  api.export('FormGroup', 'client');
  api.export('Glyphicon', 'client');
  api.export('Grid', 'client');
  api.export('Input', 'client');
  api.export('InputBase', 'client');
  api.export('Interpolate', 'client');
  api.export('Jumbotron', 'client');
  api.export('Label', 'client');
  api.export('ListGroup', 'client');
  api.export('ListGroupItem', 'client');
  api.export('MenuItem', 'client');
  api.export('Modal', 'client');
  api.export('ModalBody', 'client');
  api.export('ModalDialog', 'client');
  api.export('ModalFooter', 'client');
  api.export('ModalTitle', 'client');
  api.export('Nav', 'client');
  api.export('NavBrand', 'client');
  api.export('NavDropdown', 'client');
  api.export('NavItem', 'client');
  api.export('Navbar', 'client');
  api.export('Overlay', 'client');
  api.export('OverlayTrigger', 'client');
  api.export('PageHeader', 'client');
  api.export('PageItem', 'client');
  api.export('Pager', 'client');
  api.export('Pagination', 'client');
  api.export('PaginationButton', 'client');
  api.export('Panel', 'client');
  api.export('PanelGroup', 'client');
  api.export('Popover', 'client');
  api.export('Portal', 'client');
  api.export('Position', 'client');
  api.export('ProgressBar', 'client');
  api.export('Row', 'client');
  api.export('SafeAnchor', 'client');
  api.export('SplitButton', 'client');
  api.export('SplitToggle', 'client');
  api.export('SubNav', 'client');
  api.export('Tab', 'client');
  api.export('TabPane', 'client');
  api.export('TabbedArea', 'client');
  api.export('Table', 'client');
  api.export('Tabs', 'client');
  api.export('Thumbnail', 'client');
  api.export('Tooltip', 'client');
  api.export('Transition', 'client');
  api.export('Well', 'client');
});
