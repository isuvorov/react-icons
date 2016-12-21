'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdPanTool = function (_React$Component) {
    _inherits(MdPanTool, _React$Component);

    function MdPanTool() {
        _classCallCheck(this, MdPanTool);

        return _possibleConstructorReturn(this, (MdPanTool.__proto__ || Object.getPrototypeOf(MdPanTool)).apply(this, arguments));
    }

    _createClass(MdPanTool, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm38.4 9.1v24.3c0 3.6-3.1 6.6-6.8 6.6h-12.1c-1.8 0-3.5-0.7-4.7-2l-13.2-13.3s2.2-2 2.2-2c0.4-0.4 0.9-0.5 1.4-0.5 0.3 0 0.7 0.1 1 0.2 0.1 0 7.2 4.1 7.2 4.1v-19.9c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5v11.8h1.6v-15.9c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5v15.9h1.6v-14.3c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5v14.3h1.8v-9.3c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5z' })
                )
            );
        }
    }]);

    return MdPanTool;
}(React.Component);

exports.default = MdPanTool;
module.exports = exports['default'];