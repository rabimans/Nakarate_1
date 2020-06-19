import L from "leaflet";
import '~/lib/leaflet.layer.yandex';
import '~/lib/leaflet.layer.google';
import {BingLayer} from '~/lib/leaflet.layer.bing';
import config from './config';
import '~/lib/leaflet.layer.soviet-topomaps-grid';
import '~/lib/leaflet.layer.westraPasses';
import urlViaCorsProxy from '~/lib/CORSProxy';

    const layersDefs = [

                {
                    title: 'Bing Road',
                    isDefault: false,
                    layer: new BingLayer(config.bingKey,
                        {
                            type: 'Road',
                            maxNativeZoom: 18,
                            code: 'bR',
                            isOverlay: false,
                            scaleDependent: false,
                            print: true,
                            jnx: true,
                            shortName: 'bing_road'
                        }
                    )
                },
                {
                    title: 'here',
                    description: '- here Base Map',
                    isDefault: false,
                    layer: L.tileLayer('https://{s}.base.maps.ls.hereapi.com/maptile/2.1/maptile/newest/normal.day/{z}/{x}/{y}/256/png8?apikey=iu5MkFb0qMyORRDvbKXi4_b36zI0CYwSR9NvFv8wT2g',
                        {
                            code: 'hB',
                            isOverlay: false,
                            scaleDependent: true,
                            subdomains: '1234',
                            maxNativeZoom: 18,
                            print: true,
                            jnx: true,
                            shortName: 'hereBase'
                        }
                    )
                },
                {
                    title: 'here Imagery',
                    description: '- here Imagery',
                    isDefault: false,
                    layer: L.tileLayer('https://{s}.aerial.maps.ls.hereapi.com/maptile/2.1/maptile/newest/satellite.day/{z}/{x}/{y}/256/png8?apikey=iu5MkFb0qMyORRDvbKXi4_b36zI0CYwSR9NvFv8wT2g',
                        {
                            code: 'hI',
                            isOverlay: false,
                            scaleDependent: true,
                            subdomains: '1234',
                            maxNativeZoom: 18,
                            print: true,
                            jnx: true,
                            shortName: 'hereImagery'
                        }
                    )
                },
                {
                    title: 'TomTom',
                    description: 'TomTom base map',
                    isDefault: false,
                    layer: L.tileLayer('https://{s}.api.tomtom.com/map/1/tile/basic/main/{z}/{x}/{y}.png?key=A3oh7uISGmCWRU3VuA7USH3ltMk0PXBF',
                        {
                            code: 'tt',
                            isOverlay: false,
                            scaleDependent: true,
                            subdomains: 'abcd',
                            maxNativeZoom: 18,
                            print: true,
                            jnx: true,
                            shortName: 'tomtom'
                        }
                    )
                },
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
                    isDefault: false,
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
                    isDefault: false,
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
                    title: 'Historic 1:250,000 (R501)',
                    isDefault: false,
                    layer: L.tileLayer(
                        'http://s3-ap-southeast-2.amazonaws.com/au.topodude.com.au/R501/{z}/{x}/{y}.png',
                        {
                            code: 'ga1',
                            isOverlay: false,
                            scaleDependent: true,
                            maxNativeZoom: 13,
                            print: true,
                            jnx: true,
                            shortName: 'Historic501'
                        }
                    )
                },
                {
                    title: 'Historic 1:250,000 (R502)',
                    isDefault: false,
                    layer: L.tileLayer(
                        'http://s3-ap-southeast-2.amazonaws.com/au.topodude.com.au/R502_Australia_250k/{z}/{x}/{y}.png',
                        {
                            code: 'ga2',
                            isOverlay: false,
                            scaleDependent: true,
                            maxNativeZoom: 13,
                            print: true,
                            jnx: true,
                            shortName: 'Historic502'
                        }
                    )
                },
                {
                    title: 'Geoscience Australia 1:100,000',
                    isDefault: false,
                    layer: L.tileLayer(
                        'http://s3-ap-southeast-2.amazonaws.com/au.topodude.com.au/Geoscience%20100k/{z}/{x}/{y}.png',
                        {
                            code: 'ga3',
                            isOverlay: false,
                            scaleDependent: true,
                            maxNativeZoom: 13,
                            print: true,
                            jnx: true,
                            shortName: 'Geoscience100k'
                        }
                    )
                },
                {
                    title: 'Geoscience 1:100,000 unpublished',
                    isDefault: false,
                    layer: L.tileLayer(
                        'http://s3-ap-southeast-2.amazonaws.com/au.topodude.com.au/Geoscience_100k_unpublished/{z}/{x}/{y}.png',
                        {
                            code: 'ga4',
                            isOverlay: false,
                            scaleDependent: true,
                            maxNativeZoom: 13,
                            print: true,
                            jnx: true,
                            shortName: 'Geoscience100kun'
                        }
                    )
                },
                {
                    title: 'Queensland Roads',
                    isDefault: false,
                    layer: L.tileLayer(
                        'https://gisservices.information.qld.gov.au/arcgis/rest/services/Transportation/RoadsCache/MapServer/tile/{z}/{y}/{x}',
                        {
                            code: 'qR',
                            isOverlay: true,
                            isOverlayTransparent: true,
                            scaleDependent: true,
                            maxNativeZoom: 18,
                            print: true,
                            jnx: true,
                            shortName: 'Queensland_Roads'
                        }
                    )
                },
                {
                    title: 'NSW Topo',
                    isDefault: false,
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
                    isDefault: false,
                    layer: L.tileLayer(
                        'http://maps.six.nsw.gov.au/arcgis/rest/services/sixmaps/LPITopoMap/MapServer/tile/{z}/{y}/{x}',
                        {
                            code: 'nswR',
                            isOverlay: false,
                            scaleDependent: false,
                            maxNativeZoom: 16,
                            print: true,
                            jnx: true,
                            shortName: 'NSW_Raster'
                        }
                    )
                },
                {
                    title: 'NSW Imagery',
                    isDefault: false,
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
                    isDefault: false,
                    layer: L.tileLayer(
                        'http://maps.six.nsw.gov.au/arcgis/rest/services/sixmaps/LPITopoMap_S1/MapServer/tile/{z}/{y}/{x}',
                        {
                            code: 'nswH',
                            isOverlay: false,
                            scaleDependent: false,
                            maxNativeZoom: 16,
                            print: true,
                            jnx: true,
                            shortName: 'NSW_Historic'
                        }
                    )
                },
                {
                    title: 'QTopo',
                    isDefault: false,
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
                    isDefault: false,
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
                    isDefault: false,
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
                    isDefault: false,
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
                    isDefault: false,
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
                    isDefault: false,
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
                    isDefault: false,
                    layer: L.tileLayer(
                        'http://services.ga.gov.au/site_7/rest/services/NATMAP_Digital_Maps_250K_2008Edition_WM/MapServer/tile/{z}/{y}/{x}',
                        {
                            code: 'gaT',
                            isOverlay: false,
                            scaleDependent: false,
                            maxNativeZoom: 13,
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
                            maxNativeZoom: 16,
                            print: true,
                            jnx: true,
                            shortName: 'Geoscience_Australia_NM'
                        }
                    )
                },
                {
                    title: 'Tasmania Topographic base map',
                    isDefault: false,
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
                    isDefault: false,
                    layer: L.tileLayer(
                        'https://services.thelist.tas.gov.au/arcgis/rest/services/Basemaps/TasmapRaster/MapServer/tile/{z}/{y}/{x}',
                        {
                            code: 'tasR',
                            isOverlay: false,
                            scaleDependent: false,
                            maxNativeZoom: 15,
                            print: true,
                            jnx: true,
                            shortName: 'Tasmania_Raster'
                        }
                    )
                },
                {
                    title: 'Tasmania Imagery',
                    isDefault: false,
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
                    isDefault: false,
                    layer: L.tileLayer(
                        'https://services.thelist.tas.gov.au/arcgis/rest/services/Basemaps/ESgisMapBookPUBLIC/MapServer/tile/{z}/{y}/{x}?blankTile=false',
                        {
                            code: 'tasE',
                            isOverlay: false,
                            scaleDependent: false,
                            maxNativeZoom: 14,
                            print: true,
                            jnx: true,
                            shortName: 'Tasmania_Emergency_Services'
                        }
                    )
                },
                {
                    title: 'Google Map',
                    isDefault: false,
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
                    isDefault: false,
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
                    isDefault: false,
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
                    isDefault: false,
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
                    title: 'OpenTopoMap',
                    isDefault: true,
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
                    layer: L.tileLayer('https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=cf406f30bfc54296a9d573ced1e9d6cf',
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
                    title: 'OpenLandscapeMap',
                    description: '<a href="https://www.thunderforest.com/maps/landscape/">(Info and key)</a>',
                    isDefault: false,
                    layer: L.tileLayer('https://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=cf406f30bfc54296a9d573ced1e9d6cf',
                        {
                            code: 'Ols',
                            isOverlay: false,
                            scaleDependent: true,
                            print: true,
                            jnx: true,
                            shortName: 'OpenLSM',
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
                    title: 'TomTom Hybrid',
                    isDefault: false,
                    layer: L.tileLayer('https://{s}.api.tomtom.com/map/1/tile/hybrid/main/{z}/{x}/{y}.png?key=A3oh7uISGmCWRU3VuA7USH3ltMk0PXBF',
                        {
                            code: 'ttH',
                            isOverlay: true,
                            isOverlayTransparent: true,
                            scaleDependent: true,
                            ubdomains: 'abcd',
                            maxNativeZoom: 18,
                            print: true,
                            jnx: false,
                            shortName: 'TomTomHybrid'
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
                'OpenTopoMap',
            ],
        },
        {
            title: 'Global',
            layers: [
                'ESRI Topo',
                'ESRI Imagery',
                'Google Map',
                'Google Imagery',
                'Google Terrain',
                'Bing Road',
                'Bing Imagery',
                'here',
                'here Imagery',
                'TomTom'
            ],
        },
        {
            title: 'Australia',
            layers: [
                'Geoscience Australia Base',
                'Geoscience Australia 1:100,000',
                'Geoscience Australia 1:250,000',
                'Geoscience Australia National Map',
                'Historic 1:250,000 (R501)',
                'Historic 1:250,000 (R502)',
                'Geoscience 1:100,000 unpublished'
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
                'QImagery',
                'Queensland Roads'
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
                'OpenCycleMap',
                'OSM Outdoors',
                'OpenLandscapeMap'
            ],
        },
        {
            title: 'Miscellaneous',
            layers: [
                'Google Hybrid',
                'TomTom Hybrid'
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
        'OpenLandscapeMap',
        // Imagery
        'ESRI Imagery',
        'NSW Imagery',
        'QImagery',
        'SA Imagery',
        'Google Imagery',
        'Bing Imagery',
        'here Imagery',
        // Australia maps
        'Geoscience Australia Base',
        'Geoscience Australia 1:100,000',
        'Geoscience 1:100,000 unpublished',
        'Geoscience Australia 1:250,000',
        'Geoscience Australia National Map',
        'Historic 1:250,000 (R501)',
        'Historic 1:250,000 (R502)',
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
        'Bing Road',
        'here',
        'TomTom',
        'ESRI Topo',
        // map overlays
        '#custom-bottom',
        'Queensland Roads',
        'TomTom Hybrid',
        '#custom-top',

        // line overlays
        'Google Hybrid',
        'OpenStreetMap GPS traces',
        'Strava heatmap (all)',
        'Strava heatmap (run)',
        'Strava heatmap (ride)',
        'Strava heatmap (winter)'
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
