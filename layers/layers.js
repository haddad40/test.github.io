var wms_layers = [];

var format_PERIMETREDTA_0 = new ol.format.GeoJSON();
var features_PERIMETREDTA_0 = format_PERIMETREDTA_0.readFeatures(json_PERIMETREDTA_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PERIMETREDTA_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PERIMETREDTA_0.addFeatures(features_PERIMETREDTA_0);
var lyr_PERIMETREDTA_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PERIMETREDTA_0, 
                style: style_PERIMETREDTA_0,
                interactive: true,
                title: '<img src="styles/legend/PERIMETREDTA_0.png" /> PERIMETRE DTA'
            });
var format_RESERVOIRSNPAVRAII_1 = new ol.format.GeoJSON();
var features_RESERVOIRSNPAVRAII_1 = format_RESERVOIRSNPAVRAII_1.readFeatures(json_RESERVOIRSNPAVRAII_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RESERVOIRSNPAVRAII_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESERVOIRSNPAVRAII_1.addFeatures(features_RESERVOIRSNPAVRAII_1);
var lyr_RESERVOIRSNPAVRAII_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RESERVOIRSNPAVRAII_1, 
                style: style_RESERVOIRSNPAVRAII_1,
                interactive: true,
                title: '<img src="styles/legend/RESERVOIRSNPAVRAII_1.png" /> RESERVOIRS NPA VRAII'
            });
var format_espacesNPAYSAGERS_2 = new ol.format.GeoJSON();
var features_espacesNPAYSAGERS_2 = format_espacesNPAYSAGERS_2.readFeatures(json_espacesNPAYSAGERS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_espacesNPAYSAGERS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_espacesNPAYSAGERS_2.addFeatures(features_espacesNPAYSAGERS_2);
var lyr_espacesNPAYSAGERS_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_espacesNPAYSAGERS_2, 
                style: style_espacesNPAYSAGERS_2,
                interactive: true,
                title: '<img src="styles/legend/espacesNPAYSAGERS_2.png" /> espaces N PAYSAGERS'
            });
var format_ESPACESNATURELSDTAREPARES_3 = new ol.format.GeoJSON();
var features_ESPACESNATURELSDTAREPARES_3 = format_ESPACESNATURELSDTAREPARES_3.readFeatures(json_ESPACESNATURELSDTAREPARES_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESPACESNATURELSDTAREPARES_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESPACESNATURELSDTAREPARES_3.addFeatures(features_ESPACESNATURELSDTAREPARES_3);
var lyr_ESPACESNATURELSDTAREPARES_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ESPACESNATURELSDTAREPARES_3, 
                style: style_ESPACESNATURELSDTAREPARES_3,
                interactive: true,
                title: '<img src="styles/legend/ESPACESNATURELSDTAREPARES_3.png" /> ESPACES NATURELS DTA REPARES'
            });
var format_ENM_4 = new ol.format.GeoJSON();
var features_ENM_4 = format_ENM_4.readFeatures(json_ENM_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ENM_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ENM_4.addFeatures(features_ENM_4);
var lyr_ENM_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ENM_4, 
                style: style_ENM_4,
                interactive: true,
                title: '<img src="styles/legend/ENM_4.png" /> ENM'
            });
var format_NPACOUPEE_5 = new ol.format.GeoJSON();
var features_NPACOUPEE_5 = format_NPACOUPEE_5.readFeatures(json_NPACOUPEE_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NPACOUPEE_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NPACOUPEE_5.addFeatures(features_NPACOUPEE_5);
var lyr_NPACOUPEE_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NPACOUPEE_5, 
                style: style_NPACOUPEE_5,
                interactive: true,
                title: '<img src="styles/legend/NPACOUPEE_5.png" /> NPA COUPEE'
            });

lyr_PERIMETREDTA_0.setVisible(true);lyr_RESERVOIRSNPAVRAII_1.setVisible(true);lyr_espacesNPAYSAGERS_2.setVisible(true);lyr_ESPACESNATURELSDTAREPARES_3.setVisible(true);lyr_ENM_4.setVisible(true);lyr_NPACOUPEE_5.setVisible(true);
var layersList = [lyr_PERIMETREDTA_0,lyr_RESERVOIRSNPAVRAII_1,lyr_espacesNPAYSAGERS_2,lyr_ESPACESNATURELSDTAREPARES_3,lyr_ENM_4,lyr_NPACOUPEE_5];
lyr_PERIMETREDTA_0.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Superficie': 'Superficie', 'Population': 'Population', 'Titre': 'Titre', });
lyr_RESERVOIRSNPAVRAII_1.set('fieldAliases', {'fid': 'fid', 'ID_RESV': 'ID_RESV', 'ID_SRCE': 'ID_SRCE', 'NOM_RESV': 'NOM_RESV', 'OBJ_ASSI': 'OBJ_ASSI', 'MILMAJ_NAT': 'MILMAJ_NAT', 'MILMAJ_REG': 'MILMAJ_REG', 'MILASO_NAT': 'MILASO_NAT', 'MILASO_REG': 'MILASO_REG', 'DELIMIT': 'DELIMIT', 'INTERREG': 'INTERREG', });
lyr_espacesNPAYSAGERS_2.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Titre': 'Titre', });
lyr_ESPACESNATURELSDTAREPARES_3.set('fieldAliases', {'fid': 'fid', 'titre': 'titre', });
lyr_ENM_4.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Titre': 'Titre', });
lyr_NPACOUPEE_5.set('fieldAliases', {'fid': 'fid', 'SCHEMA_ID': 'SCHEMA_ID', 'SCHEMA_NOM': 'SCHEMA_NOM', 'ID_DERN_PR': 'ID_DERN_PR', 'COLLEC': 'COLLEC', 'TYP_COLLEC': 'TYP_COLLEC', 'CODE_SIREN': 'CODE_SIREN', 'geom_scot': 'geom_scot', 'ID_DERN__1': 'ID_DERN__1', 'DATE_APPRO': 'DATE_APPRO', 'NPA': 'NPA', });
lyr_PERIMETREDTA_0.set('fieldImages', {'fid': '', 'Id': '', 'Superficie': '', 'Population': '', 'Titre': '', });
lyr_RESERVOIRSNPAVRAII_1.set('fieldImages', {'fid': '', 'ID_RESV': '', 'ID_SRCE': '', 'NOM_RESV': '', 'OBJ_ASSI': '', 'MILMAJ_NAT': '', 'MILMAJ_REG': '', 'MILASO_NAT': '', 'MILASO_REG': '', 'DELIMIT': '', 'INTERREG': '', });
lyr_espacesNPAYSAGERS_2.set('fieldImages', {'fid': '', 'ID': '', 'Titre': '', });
lyr_ESPACESNATURELSDTAREPARES_3.set('fieldImages', {'fid': '', 'titre': '', });
lyr_ENM_4.set('fieldImages', {'fid': '', 'ID': '', 'Titre': '', });
lyr_NPACOUPEE_5.set('fieldImages', {'fid': '', 'SCHEMA_ID': '', 'SCHEMA_NOM': '', 'ID_DERN_PR': '', 'COLLEC': '', 'TYP_COLLEC': '', 'CODE_SIREN': '', 'geom_scot': '', 'ID_DERN__1': '', 'DATE_APPRO': '', 'NPA': '', });
lyr_PERIMETREDTA_0.set('fieldLabels', {'fid': 'no label', 'Id': 'no label', 'Superficie': 'no label', 'Population': 'no label', 'Titre': 'no label', });
lyr_RESERVOIRSNPAVRAII_1.set('fieldLabels', {'fid': 'no label', 'ID_RESV': 'no label', 'ID_SRCE': 'no label', 'NOM_RESV': 'no label', 'OBJ_ASSI': 'no label', 'MILMAJ_NAT': 'no label', 'MILMAJ_REG': 'no label', 'MILASO_NAT': 'no label', 'MILASO_REG': 'no label', 'DELIMIT': 'no label', 'INTERREG': 'no label', });
lyr_espacesNPAYSAGERS_2.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'Titre': 'no label', });
lyr_ESPACESNATURELSDTAREPARES_3.set('fieldLabels', {'fid': 'no label', 'titre': 'no label', });
lyr_ENM_4.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'Titre': 'no label', });
lyr_NPACOUPEE_5.set('fieldLabels', {'fid': 'no label', 'SCHEMA_ID': 'no label', 'SCHEMA_NOM': 'no label', 'ID_DERN_PR': 'no label', 'COLLEC': 'no label', 'TYP_COLLEC': 'no label', 'CODE_SIREN': 'no label', 'geom_scot': 'no label', 'ID_DERN__1': 'no label', 'DATE_APPRO': 'no label', 'NPA': 'no label', });
lyr_NPACOUPEE_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});