const styles = theme => ({

    content: {
      height: 'calc(100vh - 100px)',
      overflow: 'auto',
      padding: '25px',
      marginLeft: '400px',
      boxSizing: 'border-box',
      overflowY: 'scroll',
      top: '50px',
      backgroundColor: 'teal',
      // backgroundImage: "'url('+'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpaperplay.com%2Fboard%2Fabstract-graffiti-wallpapers&psig=AOvVaw0Jvj0d8-g3M_Oy8n7WFUTP&ust=1592514411068000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNCzs9bgieoCFQAAAAAdAAAAABAD' + ')'",
      width: 'calc(100% - 400px)',
      position: 'absolute',
      
    },
  
    userSent: {
      float: 'left',
      clear: 'both',
      padding: '20px',
      boxSizing: 'border-box',
      wordWrap: 'break-word',
      marginTop: '10px',
      backgroundColor: '#707BC4',
      color: 'white',
      width: '300px',
      borderRadius: '10px'
    },
  
    friendSent: {
      float: 'right',
      clear: 'both',
      padding: '20px',
      boxSizing: 'border-box',
      wordWrap: 'break-word',
      marginTop: '10px',
      backgroundColor: '#707BC4',
      color: 'white',
      width: '300px',
      borderRadius: '10px'
    },
  
    chatHeader: {
      width: 'calc(100% - 400px)',
      height: '50px',
      backgroundColor: '#344195',
      position: 'fixed',
      marginLeft: '400px',
      fontSize: '18px',
      textAlign: 'center',
      color: 'white',
      paddingTop: '10px',
      boxSizing: 'border-box'
    }
  
  });
  
  export default styles;