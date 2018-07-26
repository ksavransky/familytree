import React, { Component } from 'react';
import SortableTree, { addNodeUnderParent, removeNodeAtPath } from 'react-sortable-tree';
import Modal from 'react-modal';
import 'react-sortable-tree/style.css';
import './Tree.css';
import _ from 'lodash'

const customStyles = {
  content : {
    width : '500px',
    height : '50%',
    top : '2%',
    left : '30%',
    background: 'rgb(70, 69, 69)',
    color: 'white'
  }
};

export default class Tree extends Component {
  constructor(props) {
    super(props);

    this.state = {
      treeData: _.cloneDeep(this.props.data),
      selectedNode: false,
      selectedPath: null,
      getNodeKey: null,
      modalIsOpen: false,
      showAddNode: false
    };

    this.renderAttributes = this.renderAttributes.bind(this)
    this.renderAddNode = this.renderAddNode.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.openModal = this.openModal.bind(this)
  }

  closeModal() {
    this.setState({modalIsOpen: false, showAddNode: false});
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  renderAttributes() {
    return  _.map(this.state.selectedNode.attributes, (value, key) => {
      return (
        <div key={key + '_' + value} className='attribute'>
          <span className='key'>{key + ': '}</span>
          <span className='value'>{value}</span>
        </div>
      )
    })
  }

  renderAddNode() {
    return (
      <div className='new-node-container'>
        <div className='new-node-title'>{'Add New Child Node to ' + this.state.selectedNode.title}</div>
        <div className='new-node-label-input-button'>
          <div className='new-node-label'>{"New Node's Name: "}</div>
          <input className='new-node-input' onChange={(e) => this.setState({newNodeName: e.target.value})} value={this.state.newNodeName}/>
          <button
            onClick={() => {
              if (this.state.newNodeName) {
                this.setState(state => ({
                  treeData: addNodeUnderParent({
                    treeData: state.treeData,
                    parentKey: state.selectedPath[state.selectedPath.length - 1],
                    expandParent: true,
                    getNodeKey: state.getNodeKey,
                    newNode: {
                      title: state.newNodeName,
                    },
                  }).treeData,
                }))
                this.setState({newNodeName: ''})
                this.closeModal()
              }
            }}
            >
            Add
          </button>
        </div>
      </div>
    )
  }

  render() {
    const getNodeKey = ({ treeIndex }) => treeIndex;
    return (
      <div className='main'>
        <div style={{ height: '100vh' }}>
          <SortableTree
            treeData={this.state.treeData}
            onChange={treeData => this.setState({ treeData })}
            generateNodeProps={({ node, path }) => ({
                buttons: [
                  <button
                    onClick={() =>
                      this.setState({
                        modalIsOpen: true,
                        selectedNode: node,

                      })
                    }
                  >
                    Show Attributes
                  </button>,
                  <button
                    onClick={() =>
                      this.setState({
                        modalIsOpen: true,
                        selectedNode: node,
                        selectedPath: path,
                        getNodeKey: getNodeKey,
                        showAddNode: true
                      })
                    }
                  >
                    AddChildNode
                  </button>,
                  <button
                    onClick={() =>
                      this.setState(state => ({
                        treeData: removeNodeAtPath({
                          treeData: state.treeData,
                          path,
                          getNodeKey,
                        }),
                      }))
                    }
                  >
                    Remove
                  </button>,
                ],
              })}
          />
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Attributes"
          style={customStyles}
        >
          <div className='close-button' onClick={this.closeModal}>X</div>
          {this.state.showAddNode ? this.renderAddNode() :
            this.state.selectedNode ?
              <div className='attributes'>
                <div className='title'>{'Attributes for ' + this.state.selectedNode.title}</div>
                {this.renderAttributes()}
              </div>
            : null
          }
        </Modal>
      </div>
    );
  }
}
