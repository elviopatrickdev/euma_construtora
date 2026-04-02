import { memo, useState, useCallback, useMemo } from "react";
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from "@react-google-maps/api";
import logo from "../assets/logo.png";

const modernStyle = [
    { "elementType": "geometry", "stylers": [{ "color": "#e2e6d9" }] },
    { "elementType": "labels.icon", "stylers": [{ "visibility": "on" }] },
    { "elementType": "labels.text.fill", "stylers": [{ "color": "#616161" }] },
    { "elementType": "labels.text.stroke", "stylers": [{ "color": "#f5f5f5" }] },
    { "featureType": "administrative.land_parcel", "elementType": "labels.text.fill", "stylers": [{ "color": "#bdbdbd" }] },
    { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#eeeeee" }] },
    { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [{ "color": "#757575" }] },
    { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }] },
    { "featureType": "road.arterial", "elementType": "labels.text.fill", "stylers": [{ "color": "#757575" }] },
    { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "color": "#dadada" }] },
    { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#cbd9db" }] },
    { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "color": "#9e9e9e" }] }
];

function MapComponent({ lat, lng, address, height = "400px" }) {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    });

    const containerStyle = {
        width: "100%",
        height: height,
        borderRadius: "12px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
    };

    const [showingInfoWindow, setShowingInfoWindow] = useState(false);

    // useMemo evita que o objeto de posição seja recriado em cada render
    const position = useMemo(() => ({
        lat: Number(lat) || 16.177,
        lng: Number(lng) || -22.918
    }), [lat, lng]);

    const onMarkerClick = useCallback(() => setShowingInfoWindow(true), []);
    const onClose = useCallback(() => setShowingInfoWindow(false), []);

    if (!isLoaded) return <div>Carregando mapa...</div>;

    return (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={position}
            zoom={14}
            options={{
                styles: modernStyle,
                gestureHandling: "cooperative"
            }}
        >
            <Marker
                position={position}
                onClick={onMarkerClick}
                // Proteção para caso o objeto google ainda não tenha carregado a constante
                animation={window.google ? window.google.maps.Animation.DROP : null}
            />

            {showingInfoWindow && (
                <InfoWindow position={position} onCloseClick={onClose}>
                    <div style={{
                        display: "flex",          // Ativa o Flexbox
                        flexDirection: "column",   // Empilha os itens (Logo em cima, texto embaixo)
                        alignItems: "center",      // Centraliza horizontalmente
                        justifyContent: "center",  // Centraliza verticalmente
                        textAlign: "center",
                        padding: "12px 8px",       // Aumentei um pouco o respiro vertical
                        maxWidth: "200px",         // Aumentei levemente para o texto não quebrar muito
                        fontFamily: "'Segoe UI', Roboto, sans-serif" // Fonte mais moderna
                    }}>
                        {/* Centralização da Imagem */}
                        <img
                            src={logo}
                            alt="Logo"
                            style={{
                                height: "45px",
                                width: "auto",         // Mantém a proporção
                                marginBottom: "10px",
                                display: "block"       // Remove gaps fantasmas de imagens inline
                            }}
                        />

                        {/* Estilo do Texto */}
                        <p style={{
                            fontSize: "13px",
                            color: "#444",           // Um cinza levemente mais forte para leitura
                            margin: 0,
                            lineHeight: "1.4",       // Espaçamento entre linhas mais confortável
                            fontWeight: "500"        // Deixa o endereço um pouco mais visível
                        }}>
                            {address || "Engenharia e Construção Lda."}
                        </p>
                    </div>
                </InfoWindow>
            )}
        </GoogleMap>
    );
}

export default memo(MapComponent);