const styles = {
    airportList: {
      position: 'absolute',
      left: 411,
      top: 171,
      right: 200,
      overflow: 'hidden',
      marginTop:15,
      width:250,
      
    },
    listItem: {
      display: 'flex',
      backgroundColor: 'wheat',
      flexDirection: 'column',
      justifyContent: 'center',
      border: '1px solid transparent',
      cursor: 'pointer',
      height: 'auto',
      lineHeight: '15px', 
      width: 200,
      border: '1px solid black',
    },
    selectedListItem: {
      border: '1px solid blue',
    },
    text: {
      justifyContent: 'center',
      color: 'black',
      marginBottom: -3,
      wordWrap: 'break-word',
    },
    scrollableList: {
        maxHeight: '200px', 
        overflowY: 'auto',
        scrollbarWidth: 'thin', 
        msOverflowStyle: 'none',
        listStyle: 'none',
        '&::WebkitScrollbar': {
          width: '8px',
        },
        '&::WebkitScrollbarThumb': {
          backgroundColor: 'gray',
          borderRadius: '4px',
        },
      },
  };
  
  export default styles;
  