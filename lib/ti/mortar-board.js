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

var TiMortarBoard = function (_React$Component) {
    _inherits(TiMortarBoard, _React$Component);

    function TiMortarBoard() {
        _classCallCheck(this, TiMortarBoard);

        return _possibleConstructorReturn(this, (TiMortarBoard.__proto__ || Object.getPrototypeOf(TiMortarBoard)).apply(this, arguments));
    }

    _createClass(TiMortarBoard, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm34.2 13.2s-9.7-4.9-11.5-5.9-2.9-1.1-5 0c-2.2 1-11.2 5.5-11.2 5.5-1.3 0.7-2.5 2-2.5 3.4s0.3 2 0.3 2l-0.5 2.5c-0.5 2-0.5 4.5-0.5 5.5 0 2.5 2.2 4.3 3.7 4.5 1.5 0.1 2.7-0.2 2.7-0.2 2.3 2.2 6.1 3.5 10.6 3.5 7.4 0 13-3.7 13-8.3 0-1.9-0.6-4.5-0.6-4.5l1.8-1c1.5-0.9 2.2-2.4 2.2-3.9-0.2-1.3-1-2.5-2.5-3.1z m-13.7 17.3c-5.3 0-9.7-2.2-9.7-5l0.9-4.7 7 3.5c1 0.5 2.5 0.5 3.6 0l7.2-3.5 0.7 4.7c0 2.7-4.2 5-9.7 5z m12.2-13.5l-11 5.7c-0.7 0.3-1.7 0.3-2.4 0l-9.5-4.9c-0.3 0.9-0.5 2-0.5 3.4 0 2.3 0.4 4 0.4 4.8s-0.5 1.3-1.2 1.3h-0.2c-0.6 0-1.3-0.5-1.3-1.3s0-2.7 0.5-5.2c0.3-1.5 0.7-2.8 1-3.6l-0.3-0.2c-0.7-0.3-0.7-0.8 0-1.2l11.1-5.6c0.7-0.4 1.5-0.4 2.2 0s11.2 5.6 11.2 5.6c0.6 0.4 0.6 0.9 0 1.2z' })
                )
            );
        }
    }]);

    return TiMortarBoard;
}(React.Component);

exports.default = TiMortarBoard;
module.exports = exports['default'];