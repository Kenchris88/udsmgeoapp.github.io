Ext.require([
    'Ext.container.Viewport',
    'Ext.layout.container.Border',
    'GeoExt.tree.Panel',
    'Ext.tree.plugin.TreeViewDragDrop',
    'GeoExt.panel.Map',
    'GeoExt.tree.OverlayLayerContainer',
    'GeoExt.tree.BaseLayerContainer',
    'GeoExt.data.LayerTreeModel',
    'GeoExt.tree.View',
    'GeoExt.container.WmsLegend',
    'GeoExt.tree.Column',
    // We need to require this class, even though it is used by Ext.EventObjectImpl
    // see: http://www.sencha.com/forum/showthread.php?262124-Missed-(-)-dependency-reference-to-a-Ext.util.Point-in-Ext.EventObjectImpl
    'Ext.util.Point'
]);

Ext.application({
    name: 'Tree Legend',
    launch: function() {
        var mapPanel = Ext.create('GeoExt.MapPanel', {
            region: "center",
            center: [39.217, -6.776],
            zoom: 15,
            layers: [
               new OpenLayers.Layer.WMS("OpenStreetMap WMS",
                    "https://ows.terrestris.de/osm/service?",
                    {layers: 'OSM-WMS'},
                    {
                        attribution: '&copy; terrestris GmbH & Co. KG <br>' +
                            'Data &copy; OpenStreetMap ' +
                            '<a href="http://www.openstreetmap.org/copyright/en"' +
                            'target="_blank">contributors<a>',
                        buffer: 0,
                        // exclude this layer from layer container nodes
                        displayInLayerSwitcher: false
                    }
                ),
			   new OpenLayers.Layer.WMS("boundary",
                    "http://localhost:8080/geoserver/Udsm_Campus_Data/wms",
                    {
                        layers: 'boundary', 
                        format: 'image/png', 
                        transparent: true
                    },
                    {
                        singleTile: true
                    }
                ),
				 new OpenLayers.Layer.WMS("contours",
                    "http://localhost:8080/geoserver/Udsm_Campus_Data/wms",
                    {
                        layers: 'contours', 
                        format: 'image/png', 
                        transparent: true
                    },
                    {
                        singleTile: true
                    }
                ),
				 new OpenLayers.Layer.WMS("dumpsites",
                    "http://localhost:8080/geoserver/Udsm_Campus_Data/wms",
                    {
                        layers: 'dumpsites', 
                        format: 'image/png', 
                        transparent: true
                    },
                    {
                        singleTile: true
                    }
                ),
				 new OpenLayers.Layer.WMS("electric building distribution",
                    "http://localhost:8080/geoserver/Udsm_Campus_Data/wms",
                    {
                        layers: 'electric building distribution', 
                        format: 'image/png', 
                        transparent: true
                    },
                    {
                        singleTile: true
                    }
                ),
				 new OpenLayers.Layer.WMS("footpaths",
                    "http://localhost:8080/geoserver/Udsm_Campus_Data/wms",
                    {
                        layers: 'footpaths', 
                        format: 'image/png', 
                        transparent: true
                    },
                    {
                        singleTile: true
                    }
                ),
				 new OpenLayers.Layer.WMS("grounds",
                    "http://localhost:8080/geoserver/Udsm_Campus_Data/wms",
                    {
                        layers: 'grounds', 
                        format: 'image/png', 
                        transparent: true
                    },
                    {
                        singleTile: true
                    }
                ),
				 new OpenLayers.Layer.WMS("major contours",
                    "http://localhost:8080/geoserver/Udsm_Campus_Data/wms",
                    {
                        layers: 'major contours', 
                        format: 'image/png', 
                        transparent: true
                    },
                    {
                        singleTile: true
                    }
                ),
				 new OpenLayers.Layer.WMS("new buildings",
                    "http://localhost:8080/geoserver/Udsm_Campus_Data/wms",
                    {
                        layers: 'new buildings', 
                        format: 'image/png', 
                        transparent: true
                    },
                    {
                        singleTile: true
                    }
                ),
				 new OpenLayers.Layer.WMS("old buildings",
                    "http://localhost:8080/geoserver/Udsm_Campus_Data/wms",
                    {
                        layers: 'old buildings', 
                        format: 'image/png', 
                        transparent: true
                    },
                    {
                        singleTile: true
                    }
                ),
				new OpenLayers.Layer.WMS("powerlines",
                    "http://localhost:8080/geoserver/Udsm_Campus_Data/wms",
                    {
                        layers: 'powerlines', 
                        format: 'image/png', 
                        transparent: true
                    },
                    {
                        singleTile: true
                    }
                ),
				new OpenLayers.Layer.WMS("rivers",
                    "http://localhost:8080/geoserver/Udsm_Campus_Data/wms",
                    {
                        layers: 'rivers', 
                        format: 'image/png', 
                        transparent: true
                    },
                    {
                        singleTile: true
                    }
                ),
				new OpenLayers.Layer.WMS("service buildings",
                    "http://localhost:8080/geoserver/Udsm_Campus_Data/wms",
                    {
                        layers: 'service buildings', 
                        format: 'image/png', 
                        transparent: true
                    },
                    {
                        singleTile: true
                    }
                ),
				new OpenLayers.Layer.WMS("sub-roads",
                    "http://localhost:8080/geoserver/Udsm_Campus_Data/wms",
                    {
                        layers: 'sub-roads', 
                        format: 'image/png', 
                        transparent: true
                    },
                    {
                        singleTile: true
                    }
                ),
				new OpenLayers.Layer.WMS("teaching class buildings",
                    "http://localhost:8080/geoserver/Udsm_Campus_Data/wms",
                    {
                        layers: 'teaching class buildings', 
                        format: 'image/png', 
                        transparent: true
                    },
                    {
                        singleTile: true
                    }
                ),
				new OpenLayers.Layer.WMS("university roads",
                    "http://localhost:8080/geoserver/Udsm_Campus_Data/wms",
                    {
                        layers: 'university roads', 
                        format: 'image/png', 
                        transparent: true
                    },
                    {
                        singleTile: true
                    }
                ),
                new OpenLayers.Layer.WMS("commercial buildings",
                    "http://localhost:8080/geoserver/Udsm_Campus_Data/wms",
                    {
                        layers: 'commercial buildings', 
                        format: 'image/png', 
                        transparent: true
                    },
                    {
                        singleTile: true
                    }
                )
            ]
        });

        var store = Ext.create('Ext.data.TreeStore', {
            model: 'GeoExt.data.LayerTreeModel',
            root: {
                plugins: [{
                    ptype: "gx_layercontainer",
                    loader: {
                        createNode: function(attr) {
                            // add a WMS legend to each node created
                            attr.component = {
                                xtype: "gx_wmslegend",
                                layerRecord: mapPanel.layers.getByLayer(attr.layer),
                                showTitle: false,
                                // custom class for css positioning
                                // see tree-legend.html
                                cls: "legend"
                            };
                            return GeoExt.tree.LayerLoader.prototype.createNode.call(this, attr);
                        }
                    }
                }]
            }
        });

        var tree = Ext.create('GeoExt.tree.Panel', {
            region: "east",
            title: "Layers",
            width: 250,
            autoScroll: true,
            viewConfig: {
                plugins: [{
                    ptype: 'treeviewdragdrop',
                    appendOnly: false
                }]
            },
            store: store,
            rootVisible: false,
            lines: false
        });

        Ext.create('Ext.Viewport', {
            layout: "fit",
            hideBorders: true,
            items: {
                layout: "border",
                items: [
                    mapPanel, tree, {
                        contentEl: desc,
                        region: "west",
                        width: 250,
                        bodyStyle: {padding: "5px"}
                    }
                ]
            }
        });
    }
});
