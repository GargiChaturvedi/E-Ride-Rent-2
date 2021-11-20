import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default class RideRentScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            domState: "normal",
            hasCameraPermissions: null,
            scanned: false,
            scannedData: ""
        }
    }

    getCameraPermissions = async(domState) => {
        const {status} = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            domState: domState,
            hasCameraPermissions: status==="granted",
            scanned: false
        });
    }

    handleBarCodeScanned = async({type, data}) => {
        this.setState({
            scannedData: data,
            domState: "normal",
            scanned: true
        })
    }

    render() {
        const {domState, hasCameraPermissions, scannedData, scanned} = this.state;
        if(domState === "scanner") {
            return (
                <BarCodeScanner
                    onBarCodeScanned = {scanned?undefined:this.handleBarCodeScanned}
                    style = {StyleSheet.absoluteFillObject}/>
            )
        }
        return(
            <View style={styles.container}>
                <Text style={styles.heading}>Rent A Ride!</Text>
                
                <TouchableOpacity style={styles.button} onPress={()=>{
                    this.getCameraPermissions("scanner");
                }}>
                    <Text style={styles.buttonText}>Scan QR Code</Text>
                </TouchableOpacity>

                <Text style={styles.text}>
                    {hasCameraPermissions?scannedData:"PLease grant camera permissions!"}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'pink'
    },
    heading: {
        color: 'navy',
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold'
    },
    button: {
        width: '50%',
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7A4998',
        borderRadius: 15,
        marginTop: 20
    },
    buttonText: {
        color: 'white',
        fontSize: 24,
    },
    text: {
        color: '#1520A6',
        fontSize: 25,
        marginTop: 20
    }
});