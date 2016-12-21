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

var MdiServerNetworkOff = function (_React$Component) {
    _inherits(MdiServerNetworkOff, _React$Component);

    function MdiServerNetworkOff() {
        _classCallCheck(this, MdiServerNetworkOff);

        return _possibleConstructorReturn(this, (MdiServerNetworkOff.__proto__ || Object.getPrototypeOf(MdiServerNetworkOff)).apply(this, arguments));
    }

    _createClass(MdiServerNetworkOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 13,18L 14,18C 14.5523,18 15,18.4477 15,19L 15.7315,19L 13,16.2685L 13,18 Z M 22,19L 22,20.1773L 20.8227,19L 22,19 Z M 21,21.7229L 19.7315,23L 17.7315,21L 15,21C 15,21.5523 14.5523,22 14,22L 10,22C 9.44772,22 9.00001,21.5523 9.00001,21L 2,21L 2,19L 9.00001,19C 9.00001,18.4477 9.44772,18 10,18L 11,18L 11,16L 4,16C 3.44771,16 3,15.5523 3,15L 3,11C 3,10.4477 3.44771,10 4,10L 6.73152,10L 4.73151,8L 4,8C 3.44772,8 3,7.55228 3,7L 3,6.26849L 0.999999,4.26849L 2.27711,3.00002L 21,21.7229 Z M 4,2.00001L 20,2.00001C 20.5523,2.00001 21,2.44772 21,3L 21,7C 21,7.55228 20.5523,8 20,8L 9.82269,8L 6.99999,5.17731L 6.99999,4.00001L 5.8227,4.00001L 3.83607,2.01338C 3.88941,2.00458 3.94417,2.00001 4,2.00001 Z M 20,10C 20.5523,10 21,10.4477 21,11L 21,15C 21,15.5523 20.5523,16 20,16L 17.8227,16L 11.8227,10L 20,10 Z M 8.99999,6.00002L 9.99999,6.00002L 9.99999,4.00002L 8.99999,4.00002L 8.99999,6.00002 Z M 8.99999,14L 9.99999,14L 9.99999,13.2685L 8.99999,12.2685L 8.99999,14 Z M 5,12L 5,14L 7,14L 7,12L 5,12 Z ' })
                )
            );
        }
    }]);

    return MdiServerNetworkOff;
}(React.Component);

exports.default = MdiServerNetworkOff;
module.exports = exports['default'];