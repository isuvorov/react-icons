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

var MdiQuadcopter = function (_React$Component) {
    _inherits(MdiQuadcopter, _React$Component);

    function MdiQuadcopter() {
        _classCallCheck(this, MdiQuadcopter);

        return _possibleConstructorReturn(this, (MdiQuadcopter.__proto__ || Object.getPrototypeOf(MdiQuadcopter)).apply(this, arguments));
    }

    _createClass(MdiQuadcopter, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 5.5,1C 7.98528,1 10,3.01472 10,5.5C 10,6.38054 9.74709,7.20202 9.30995,7.89574L 9.4142,8L 14.5858,8L 14.69,7.89574C 14.2529,7.20202 14,6.38054 14,5.5C 14,3.01472 16.0147,1.00001 18.5,1.00001C 20.9853,1.00001 23,3.01472 23,5.5C 23,7.98528 20.9853,10 18.5,10C 17.6195,10 16.798,9.74709 16.1043,9.30995L 15,10.4142L 15,13.5858L 16.1043,14.6901C 16.798,14.2529 17.6195,14 18.5,14C 20.9853,14 23,16.0147 23,18.5C 23,20.9853 20.9853,23 18.5,23C 16.0147,23 14,20.9853 14,18.5C 14,17.6195 14.2529,16.798 14.69,16.1043L 14.5858,16L 9.41421,16L 9.30995,16.1043C 9.74709,16.798 10,17.6195 10,18.5C 10,20.9853 7.98528,23 5.5,23C 3.01472,23 1,20.9853 1,18.5C 1,16.0147 3.01472,14 5.5,14C 6.38054,14 7.20201,14.2529 7.89574,14.69L 9,13.5858L 9,10.4142L 7.89573,9.30996C 7.20201,9.74709 6.38054,10 5.5,10C 3.01472,10 1,7.98528 1,5.5C 1,3.01472 3.01472,1 5.5,1 Z M 5.49999,3.00002C 4.11928,3.00002 3,4.11931 3,5.50002C 3,6.88073 4.11928,8.00002 5.49999,8.00002C 6.8807,8.00002 7.99999,6.88073 7.99999,5.50002C 7.99999,4.11931 6.8807,3.00002 5.49999,3.00002 Z M 5.49999,16C 4.11929,16 3,17.1193 3,18.5C 3,19.8807 4.11929,21 5.49999,21C 6.8807,21 7.99999,19.8807 7.99999,18.5C 7.99999,17.1193 6.8807,16 5.49999,16 Z M 18.5,3.00002C 17.1193,3.00002 16,4.11931 16,5.50002C 16,6.88073 17.1193,8.00002 18.5,8.00002C 19.8807,8.00002 21,6.88073 21,5.50002C 21,4.11931 19.8807,3.00002 18.5,3.00002 Z M 18.5,16C 17.1193,16 16,17.1193 16,18.5C 16,19.8807 17.1193,21 18.5,21C 19.8807,21 21,19.8807 21,18.5C 21,17.1193 19.8807,16 18.5,16 Z M 3.91081,17.2526L 5.04228,17.9058C 5.16892,17.8081 5.32767,17.75 5.5,17.75C 5.91421,17.75 6.25,18.0858 6.25,18.5L 6.24348,18.5993L 7.37491,19.2526L 7.0892,19.7474L 5.95771,19.0942C 5.83107,19.1919 5.67232,19.25 5.5,19.25C 5.08578,19.25 4.75,18.9142 4.75,18.5L 4.75652,18.4007L 3.6251,17.7474L 3.91081,17.2526 Z M 3.62509,6.25258L 4.75652,5.59935L 4.75,5.5C 4.75,5.08579 5.08579,4.75 5.5,4.75C 5.67233,4.75 5.83108,4.80812 5.95773,4.90583L 7.08919,4.25258L 7.37491,4.74745L 6.24348,5.40068L 6.25,5.5C 6.25,5.91422 5.91421,6.25 5.5,6.25C 5.32768,6.25 5.16893,6.19189 5.04229,6.09419L 3.91081,6.74746L 3.62509,6.25258 Z M 16.9108,4.25256L 18.0423,4.90583C 18.1689,4.80812 18.3277,4.75 18.5,4.75C 18.9142,4.75 19.25,5.08579 19.25,5.5L 19.2435,5.59935L 20.3749,6.25257L 20.0892,6.74744L 18.9577,6.09419C 18.8311,6.19189 18.6723,6.25 18.5,6.25C 18.0858,6.25 17.75,5.91422 17.75,5.5L 17.7565,5.40068L 16.6251,4.74744L 16.9108,4.25256 Z M 16.6251,19.2526L 17.75,18.5C 17.75,18.0858 18.0858,17.75 18.5,17.75C 18.6723,17.75 18.8311,17.8081 18.9577,17.9058L 20.0892,17.2526L 20.3749,17.7474L 19.25,18.5C 19.25,18.9142 18.9142,19.25 18.5,19.25C 18.3277,19.25 18.1689,19.1919 18.0423,19.0942L 16.9108,19.7474L 16.6251,19.2526 Z ' })
                )
            );
        }
    }]);

    return MdiQuadcopter;
}(React.Component);

exports.default = MdiQuadcopter;
module.exports = exports['default'];