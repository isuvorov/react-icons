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

var TiSocialTumbler = function (_React$Component) {
    _inherits(TiSocialTumbler, _React$Component);

    function TiSocialTumbler() {
        _classCallCheck(this, TiSocialTumbler);

        return _possibleConstructorReturn(this, (TiSocialTumbler.__proto__ || Object.getPrototypeOf(TiSocialTumbler)).apply(this, arguments));
    }

    _createClass(TiSocialTumbler, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm25.9 29.9v-3.5c-1.1 0.8-2.2 1.1-3.3 1.1-0.5 0-1-0.1-1.6-0.4-0.4-0.3-0.6-0.5-0.7-0.9-0.2-0.3-0.3-1.1-0.3-2.4v-5.5h5v-3.3h-5v-5.6h-3c-0.2 1.3-0.5 2.2-0.7 2.8-0.3 0.7-0.8 1.3-1.5 1.9-0.7 0.5-1.4 0.9-2.1 1.2v3h2.3v7.6c0 0.8 0.1 1.6 0.4 2.2 0.2 0.5 0.5 1 1.1 1.5 0.4 0.4 1 0.8 1.8 1.1 1 0.3 1.9 0.4 2.7 0.4 0.8 0 1.6-0.1 2.4-0.3 0.8-0.2 1.7-0.5 2.5-0.9z' })
                )
            );
        }
    }]);

    return TiSocialTumbler;
}(React.Component);

exports.default = TiSocialTumbler;
module.exports = exports['default'];