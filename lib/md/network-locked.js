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

var MdNetworkLocked = function (_React$Component) {
    _inherits(MdNetworkLocked, _React$Component);

    function MdNetworkLocked() {
        _classCallCheck(this, MdNetworkLocked);

        return _possibleConstructorReturn(this, (MdNetworkLocked.__proto__ || Object.getPrototypeOf(MdNetworkLocked)).apply(this, arguments));
    }

    _createClass(MdNetworkLocked, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35 26.6v-2.5c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5v2.5h5z m1.6 0c1 0 1.8 0.8 1.8 1.8v6.6c0 0.9-0.8 1.6-1.8 1.6h-8.2c-1 0-1.8-0.7-1.8-1.6v-6.6c0-1 0.8-1.8 1.8-1.8v-2.5c0-2.2 1.8-4.1 4.1-4.1s4.1 1.9 4.1 4.1v2.5z m-4.1-10c-4.1 0-7.5 3.4-7.5 7.5v0.5c-1 0.9-1.6 2.3-1.6 3.8v5h-21.8l31.8-31.8v15.1c-0.4 0-0.6-0.1-0.9-0.1z' })
                )
            );
        }
    }]);

    return MdNetworkLocked;
}(React.Component);

exports.default = MdNetworkLocked;
module.exports = exports['default'];