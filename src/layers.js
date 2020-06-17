import L from "leaflet";
import '~/lib/leaflet.layer.yandex';
import '~/lib/leaflet.layer.google';
import {BingLayer} from '~/lib/leaflet.layer.bing';
import config from './config';
import '~/lib/leaflet.layer.soviet-topomaps-grid';
import '~/lib/leaflet.layer.westraPasses';
import '~/lib/leaflet.layer.wikimapia';
import urlViaCorsProxy from '~/lib/CORSProxy';

    const layersDefs = [
                {
                    title: 'OpenStreetMap',
                    description: 'OSM default style',
                    isDefault: true,
                    layer: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                        {
                            code: 'O',
                            isOverlay: false,
                            scaleDependent: true,
                            print: true,
                            jnx: true,
                            shortName: 'osm'
                        }
                    )
                },
                {
                    title: 'ESRI Imagery',
                    isDefault: true,
                    layer: L.tileLayer(
                        'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
                        {
                            code: 'E',
                            isOverlay: false,
                            scaleDependent: false,
                            maxNativeZoom: 18,
                            print: true,
                            jnx: true,
                            shortName: 'esri'
                        }
                    )
                },
                {
                    title: 'ESRI Topo',
                    isDefault: true,
                    layer: L.tileLayer(
                        'http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
                        {
                            code: 'ETopo',
                            isOverlay: false,
                            scaleDependent: false,
                            maxNativeZoom: 18,
                            print: true,
                            jnx: true,
                            shortName: 'esriTopo'
                        }
                    )
                },
                {
                    title: 'NSW Topo',
                    isDefault: true,
                    layer: L.tileLayer(
                        'http://maps.six.nsw.gov.au/arcgis/rest/services/sixmaps/LPIMap/MapServer/tile/{z}/{y}/{x}',
                        {
                            code: 'nswT',
                            isOverlay: false,
                            scaleDependent: true,
                            maxNativeZoom: 18,
                            print: true,
                            jnx: true,
                            shortName: 'NSW_Topo'
                        }
                    )
                },
                {
                    title: 'NSW Raster',
                    isDefault: true,
                    layer: L.tileLayer(
                        'http://maps.six.nsw.gov.au/arcgis/rest/services/sixmaps/LPITopoMap/MapServer/tile/{z}/{y}/{x}',
                        {
                            code: 'nswR',
                            isOverlay: false,
                            scaleDependent: false,
                            maxNativeZoom: 18,
                            print: true,
                            jnx: true,
                            shortName: 'NSW_Raster'
                        }
                    )
                },
                {
                    title: 'NSW Imagery',
                    isDefault: true,
                    layer: L.tileLayer(
                        'http://maps.six.nsw.gov.au/arcgis/rest/services/sixmaps/LPI_Imagery_Best/MapServer/tile/{z}/{y}/{x}',
                        {
                            code: 'nswI',
                            isOverlay: false,
                            scaleDependent: false,
                            maxNativeZoom: 18,
                            print: true,
                            jnx: true,
                            shortName: 'NSW_Imagery'
                        }
                    )
                },
                {
                    title: 'NSW Historic',
                    isDefault: true,
                    layer: L.tileLayer(
                        'http://maps.six.nsw.gov.au/arcgis/rest/services/sixmaps/LPITopoMap_S1/MapServer/tile/{z}/{y}/{x}',
                        {
                            code: 'nswH',
                            isOverlay: false,
                            scaleDependent: false,
                            maxNativeZoom: 18,
                            print: true,
                            jnx: true,
                            shortName: 'NSW_Historic'
                        }
                    )
                },
                {
                    title: 'QTopo',
                    isDefault: true,
                    layer: L.tileLayer(
                        'https://gisservices.information.qld.gov.au/arcgis/rest/services/Basemaps/QldMap_Topo/MapServer/tile/{z}/{y}/{x}',
                        {
                            code: 'qT',
                            isOverlay: false,
                            scaleDependent: false,
                            maxNativeZoom: 18,
                            print: true,
                            jnx: true,
                            shortName: 'QTopo'
                        }
                    )
                },
                {
                    title: 'QImagery',
                    isDefault: true,
                    layer: L.tileLayer(
                        'https://gisservices.information.qld.gov.au/arcgis/rest/services/Imagery/QldBase_AllUsers/ImageServer/tile/{z}/{y}/{x}',
                        {
                            code: 'qI',
                            isOverlay: false,
                            scaleDependent: false,
                            maxNativeZoom: 18,
                            print: true,
                            jnx: true,
                            shortName: 'QImagery'
                        }
                    )
                },
                {
                    title: 'SA Topo',
                    isDefault: true,
                    layer: L.tileLayer(
                        'http://www.location.sa.gov.au/arcgis/rest/services/BaseMaps/Topographic_wmas/MapServer/tile/{z}/{y}/{x}',
                        {
                            code: 'saT',
                            isOverlay: false,
                            scaleDependent: false,
                            maxNativeZoom: 18,
                            print: true,
                            jnx: true,
                            shortName: 'SA_Topo'
                        }
                    )
                },
                {
                    title: 'SA Imagery',
                    isDefault: true,
                    layer: L.tileLayer(
                        'https://imagemap.geohub.sa.gov.au/mapproxy/wmts/PublicMosaic/webmercator_22/{z}/{x}/{y}.png',
                        {
                            code: 'saI',
                            minZoom: 13,
                            isOverlay: false,
                            scaleDependent: false,
                            maxNativeZoom: 18,
                            print: true,
                            jnx: true,
                            shortName: 'SA_Imagery'
                        }
                    )
                },
                {
                    title: 'VIC Emergency Atlas',
                    isDefault: true,
                    layer: L.tileLayer(
                        'https://maps.em.vic.gov.au/tms_cache/mapscape_vic_merc_color_ed8/{z}/{x}/{y}.png',
                        {
                            code: 'vicE',
                            isOverlay: false,
                            scaleDependent: false,
                            maxNativeZoom: 18,
                            print: true,
                            jnx: true,
                            shortName: 'VIC_Emergency_Atlas'
                        }
                    )
                },
                {
                    title: 'Geoscience Australia Base',
                    isDefault: true,
                    layer: L.tileLayer(
                        'http://services.ga.gov.au/site_7/rest/services/Topographic_Base_Map_WM/MapServer/tile/{z}/{y}/{x}',
                        {
                            code: 'gaB',
                            isOverlay: false,
                            scaleDependent: false,
                            maxNativeZoom: 12,
                            print: true,
                            jnx: true,
                            shortName: 'Geoscience_Australia_Base'
                        }
                    )
                },
                {
                    title: 'Geoscience Australia 1:250,000',
                    isDefault: true,
                    layer: L.tileLayer(
                        'http://services.ga.gov.au/site_7/rest/services/NATMAP_Digital_Maps_250K_2008Edition_WM/MapServer/tile/{z}/{y}/{x}',
                        {
                            code: 'gaT',
                            isOverlay: false,
                            scaleDependent: false,
                            maxNativeZoom: 18,
                            print: true,
                            jnx: true,
                            shortName: 'Geoscience_Australia_250k'
                        }
                    )
                        },
                {
                    title: 'Geoscience Australia National Map',
                    isDefault: true,
                    layer: L.tileLayer(
                        'http://services.ga.gov.au/site_7/rest/services/NationalMap_Colour_Topographic_Base_World_WM/MapServer/tile/{z}/{y}/{x}',
                        {
                            code: 'gaNM',
                            isOverlay: false,
                            scaleDependent: false,
                            maxNativeZoom: 18,
                            print: true,
                            jnx: true,
                            shortName: 'Geoscience_Australia_NM'
                        }
                    )
                },
                {
                    title: 'Tasmania Topographic base map',
                    isDefault: true,
                    layer: L.tileLayer(
                        'https://services.thelist.tas.gov.au/arcgis/rest/services/Basemaps/Topographic/MapServer/tile/{z}/{y}/{x}?blankTile=false',
                        {
                            code: 'tasBM',
                            isOverlay: false,
                            scaleDependent: false,
                            maxNativeZoom: 18,
                            print: true,
                            jnx: true,
                            shortName: 'Tasmania_Topographic_BM'
                        }
                    )
                },
                {
                    title: 'Tasmania Raster',
                    isDefault: true,
                    layer: L.tileLayer(
                        'https://services.thelist.tas.gov.au/arcgis/rest/services/Basemaps/TasmapRaster/MapServer/tile/{z}/{y}/{x}',
                        {
                            code: 'tasR',
                            isOverlay: false,
                            scaleDependent: false,
                            maxNativeZoom: 18,
                            print: true,
                            jnx: true,
                            shortName: 'Tasmania_Raster'
                        }
                    )
                },
                {
                    title: 'Tasmania Imagery',
                    isDefault: true,
                    layer: L.tileLayer(
                        'https://services.thelist.tas.gov.au/arcgis/rest/services/Basemaps/Orthophoto/MapServer/tile/{z}/{y}/{x}?blankTile=false',
                        {
                            code: 'tasI',
                            isOverlay: false,
                            scaleDependent: false,
                            maxNativeZoom: 18,
                            print: true,
                            jnx: true,
                            shortName: 'Tasmania_Imagery'
                        }
                    )
                },
                {
                    title: 'Tasmania ES Topographic',
                    isDefault: true,
                    layer: L.tileLayer(
                        'https://services.thelist.tas.gov.au/arcgis/rest/services/Basemaps/ESgisMapBookPUBLIC/MapServer/tile/{z}/{y}/{x}?blankTile=false',
                        {
                            code: 'tasE',
                            isOverlay: false,
                            scaleDependent: false,
                            maxNativeZoom: 18,
                            print: true,
                            jnx: true,
                            shortName: 'Tasmania_Emergency_Services'
                        }
                    )
                },
                {
                    title: 'Google Map',
                    isDefault: true,
                    layer: new L.Layer.GoogleMap(
                        {
                            code: 'G',
                            isOverlay: false,
                            scaleDependent: true,
                            print: true,
                            jnx: true,
                            shortName: 'google'
                        }
                    )
                },
                {
                    title: 'Google Hybrid',
                    isDefault: false,
                    layer: new L.Layer.GoogleHybrid(
                        {
                            code: 'Gh',
                            isOverlay: true,
                            scaleDependent: true,
                            print: true,
                            jnx: false,
                            shortName: 'google_hybrid',
                            isOverlayTransparent: true
                        }
                    )
                },
                {
                    title: 'Google Imagery',
                    isDefault: true,
                    layer: new L.Layer.GoogleSat(
                        {
                            code: 'L',
                            isOverlay: false,
                            scaleDependent: false,
                            print: true,
                            jnx: true,
                            shortName: 'google_sat'
                        }
                    )
                },
                {
                    title: 'Google Terrain',
                    isDefault: true,
                    layer: new L.Layer.GoogleTerrain({
                            code: 'P',
                            isOverlay: false,
                            scaleDependent: false,
                            print: true,
                            jnx: true,
                            shortName: 'google_terrain'
                        }
                    )
                },
                {
                    title: 'Bing Imagery',
                    isDefault: true,
                    layer: new BingLayer(config.bingKey,
                        {
                            code: 'I',
                            isOverlay: false,
                            scaleDependent: false,
                            print: true,
                            jnx: true,
                            shortName: 'bing_sat'
                        }
                    )
                },
                {
                    title: 'Wikimapia',
                    isDefault: true,
                    layer: new L.Wikimapia({
                        code: 'W',
                        isOverlay: true,
                        print: false,
                        jnx: false
                    })
                },              
                {
                    title: 'OpenTopoMap',
                    isDefault: false,
                    layer: L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
                        {
                            code: 'Otm',
                            isOverlay: false,
                            maxNativeZoom: 17,
                            scaleDependent: true,
                            print: true,
                            jnx: true,
                            noCors: false,
                            shortName: 'opentopo'
                        }
                    )
                },
                {
                    title: 'OpenCycleMap',
                    description: '<a href="https://www.opencyclemap.org/docs/">(Info and key)</a>',
                    isDefault: false,
                    layer: L.tileLayer('https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png',
                        {
                            code: 'Ocm',
                            isOverlay: false,
                            scaleDependent: true,
                            print: true,
                            jnx: true,
                            shortName: 'opencyclemap',
                        }
                    )
                },
                {
                    title: 'OSM Outdoors',
                    isDefault: false,
                    layer: L.tileLayer('https://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=cf406f30bfc54296a9d573ced1e9d6cf',
                        {
                            code: 'Oso',
                            isOverlay: false,
                            scaleDependent: true,
                            print: true,
                            jnx: true,
                            shortName: 'osm_outdoors',
                        }
                    )
                },
                {
                    title: 'OpenStreetMap GPS traces',
                    isDefault: false,
                    layer: L.tileLayer('https://{s}.gps-tile.openstreetmap.org/lines/{z}/{x}/{y}.png',
                        {
                            code: 'Ot',
                            isOverlay: true,
                            isOverlayTransparent: true,
                            scaleDependent: true,
                            print: true,
                            jnx: false,
                            shortName: 'osm_gps_traces'
                        }
                    )
                },
                {
                    title: 'Strava heatmap (all)',
                    isDefault: false,
                    layer: L.tileLayer(
                        urlViaCorsProxy(
                            'https://heatmap-external-{s}.strava.com/tiles-auth/all/hot/{z}/{x}/{y}.png?px=256'
                        ),
                        {
                            code: 'Sa',
                            isOverlay: true,
                            isOverlayTransparent: true,
                            scaleDependent: false,
                            print: true,
                            jnx: false,
                            subdomains: 'abc',
                            maxNativeZoom: 16,
                            noCors: true,
                            shortName: 'strava_all',
                        }
                    )
                },
                {
                    title: 'Strava heatmap (run)',
                    isDefault: false,
                    layer: L.tileLayer(
                        urlViaCorsProxy(
                            'https://heatmap-external-{s}.strava.com/tiles-auth/run/hot/{z}/{x}/{y}.png?px=256'
                        ),
                        {
                            code: 'Sr',
                            isOverlay: true,
                            isOverlayTransparent: true,
                            scaleDependent: false,
                            print: true,
                            jnx: false,
                            subdomains: 'abc',
                            maxNativeZoom: 16,
                            noCors: true,
                            shortName: 'strava_run',
                        }
                    )
                },
                {
                    title: 'Strava heatmap (ride)',
                    isDefault: false,
                    layer: L.tileLayer(
                        urlViaCorsProxy(
                            'https://heatmap-external-{s}.strava.com/tiles-auth/ride/hot/{z}/{x}/{y}.png?px=256'
                        ),
                        {
                            code: 'Sb',
                            isOverlay: true,
                            isOverlayTransparent: true,
                            scaleDependent: false,
                            print: true,
                            jnx: false,
                            subdomains: 'abc',
                            maxNativeZoom: 16,
                            noCors: true,
                            shortName: 'strava_ride',
                        }
                    )
                },
                {
                    title: 'Strava heatmap (winter)',
                    isDefault: false,
                    layer: L.tileLayer(
                        urlViaCorsProxy(
                            'https://heatmap-external-{s}.strava.com/tiles-auth/winter/hot/{z}/{x}/{y}.png?px=256'
                        ),
                        {
                            code: 'Sw',
                            isOverlay: true,
                            isOverlayTransparent: true,
                            scaleDependent: false,
                            print: true,
                            jnx: false,
                            subdomains: 'abc',
                            maxNativeZoom: 16,
                            noCors: true,
                            shortName: 'strava_winter',
                        }
                    )
                },
    ];

    const groupsDefs = [
        {
            title: 'Default layers',
            layers: [
                'OpenStreetMap',
                'ESRI Imagery',
                'ESRI Topo',
                'Google Map',
                'Google Imagery',
                'Google Terrain',
                'Bing Imagery'
            ],
        },
        {
            title: 'Australia',
            layers: [
                'Geoscience Australia Base',
                'Geoscience Australia 1:250,000',
                'Geoscience Australia National Map'
            ],
        },
        {
            title: 'Australia - New South Wales',
            layers: [
                'NSW Topo',
                'NSW Raster',
                'NSW Imagery',
                'NSW Historic'
            ],
        },
        {
            title: 'Australia - Queensland',
            layers: [
                'QTopo',
                'QImagery'
            ],
        },
        {
            title: 'Australia - South Australia',
            layers: [
                'SA Topo',
                'SA Imagery'
            ],
        },
        {
            title: 'Australia - Victoria',
            layers: [
                'VIC Emergency Atlas'
            ],
        },
        {
            title: 'Australia - Tasmania',
            layers: [
                'Tasmania Topographic base map',
                'Tasmania Raster',
                'Tasmania Imagery',
                'Tasmania ES Topographic'
            ],
        },
        {
            title: 'OpenStreetMap alternatives',
            layers: [
                'OpenTopoMap',
                'OpenCycleMap',
                'OSM Outdoors'
            ],
        },
        {
            title: 'Miscellaneous',
            layers: [
                'Google Hybrid',
            ]
        },
        {
            title: 'Routes and traces',
            layers: [
                'OpenStreetMap GPS traces',
                'Strava heatmap (all)',
                'Strava heatmap (run)',
                'Strava heatmap (ride)',
                'Strava heatmap (winter)',
            ],

        },
    ];

    const titlesByOrder = [
        // common base layers
        // OSM
        'OpenStreetMap',
        'OpenTopoMap',
        'OpenCycleMap',
        'OSM Outdoors',
        'ESRI Topo',
        // Imagery
        'ESRI Imagery',
        'NSW Imagery',
        'QImagery',
        'SA Imagery',
        'Google Imagery',
        'Bing Imagery',
        // Australia maps
        'Geoscience Australia Base',
        'Geoscience Australia 1:250,000',
        'Geoscience Australia National Map',
        'Tasmania Topographic base map',
        'Tasmania Raster',
        'Tasmania Imagery',
        'Tasmania ES Topographic',
        'NSW Topo',
        'NSW Raster',
        'NSW Historic',
        'QTopo',
        'SA Topo',
        'VIC Emergency Atlas',
        // Commercial maps
        'Google Map',
        'Google Terrain',
        // map overlays
        '#custom-bottom',
        '#custom-top',

        // line overlays
        'Google Hybrid',
        'OpenStreetMap GPS traces',
        'Strava heatmap (all)',
        'Strava heatmap (run)',
        'Strava heatmap (ride)',
        'Strava heatmap (winter)',
        'Wikimapia'
    ];

function getLayers() {
    // set metadata
    for (let layer of layersDefs) {
        layer.layer.meta = {title: layer.title};
    }

    // assign order to layers
    const orderByTitle = {};
    for (let i = 0; i < titlesByOrder.length; i++) {
        let title = titlesByOrder[i];
        orderByTitle[title] = i + 1;
    }

    for (let layer of layersDefs) {
        const title = layer.title;
        layer.order = orderByTitle[title];
        if (!layer.order) {
            throw new Error(`Layer title not found in titlesByOrder list: ${title}`);
        }
    }

    // divide layers by groups
    const grouppedLayers = [];
    const layersByTitle = {};
    for (let layer of layersDefs) {
        layersByTitle[layer.title] = layer;
    }
    for (let groupDef of groupsDefs) {
        let group = {group: groupDef.title, layers: []};
        grouppedLayers.push(group);
        for (let title of groupDef.layers) {
            let layer = layersByTitle[title];
            group.layers.push(layer);
        }
    }

    return {
        layers: grouppedLayers,
        customLayersOrder: {
            top: orderByTitle['#custom-top'],
            bottom: orderByTitle['#custom-bottom'],

        }
    };
}

export {getLayers, layersDefs, groupsDefs, titlesByOrder};
