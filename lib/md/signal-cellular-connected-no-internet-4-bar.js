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

var MdSignalCellularConnectedNoInternet4Bar = function (_React$Component) {
    _inherits(MdSignalCellularConnectedNoInternet4Bar, _React$Component);

    function MdSignalCellularConnectedNoInternet4Bar() {
        _classCallCheck(this, MdSignalCellularConnectedNoInternet4Bar);

        return _possibleConstructorReturn(this, (MdSignalCellularConnectedNoInternet4Bar.__proto__ || Object.getPrototypeOf(MdSignalCellularConnectedNoInternet4Bar)).apply(this, arguments));
    }

    _createClass(MdSignalCellularConnectedNoInternet4Bar, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm3.4 36.6l33.2-33.2v10h-6.6v23.2h-26.6z m30 0v-3.2h3.2v3.2h-3.2z m0-6.6v-13.4h3.2v13.4h-3.2z' })
                )
            );
        }
    }]);

    return MdSignalCellularConnectedNoInternet4Bar;
}(React.Component);

exports.default = MdSignalCellularConnectedNoInternet4Bar;
module.exports = exports['default'];