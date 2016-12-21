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

var TiInfoLarge = function (_React$Component) {
    _inherits(TiInfoLarge, _React$Component);

    function TiInfoLarge() {
        _classCallCheck(this, TiInfoLarge);

        return _possibleConstructorReturn(this, (TiInfoLarge.__proto__ || Object.getPrototypeOf(TiInfoLarge)).apply(this, arguments));
    }

    _createClass(TiInfoLarge, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm23.1 29.2c0 0-1 0.3-1.8 0.3-0.4 0-0.6-0.1-0.6-0.1-0.3-0.2-0.8-0.6 0-2.3l1.7-3.4c1-1.9 1.1-3.9 0.4-5.3-0.6-1.3-1.7-2.1-3.2-2.4-0.5-0.1-1-0.2-1.6-0.2-3.1 0-5.1 1.8-5.2 1.9-0.3 0.3-0.4 0.7-0.2 1.1 0.2 0.3 0.6 0.5 1 0.3 0 0 0.9-0.3 1.7-0.3 0.5 0 0.7 0.1 0.7 0.1 0.3 0.2 0.8 0.6-0.1 2.4l-1.6 3.3c-1 2-1.2 3.9-0.5 5.4 0.6 1.2 1.8 2 3.2 2.3 0.6 0.1 1.1 0.2 1.6 0.2 3.1 0 5.2-1.8 5.3-1.9 0.3-0.2 0.4-0.7 0.2-1-0.2-0.4-0.7-0.5-1-0.4z m2.7-19.2c0 2.3-1.8 4.2-4.1 4.2s-4.2-1.9-4.2-4.2c0-2.3 1.9-4.2 4.2-4.2s4.1 1.9 4.1 4.2z' })
                )
            );
        }
    }]);

    return TiInfoLarge;
}(React.Component);

exports.default = TiInfoLarge;
module.exports = exports['default'];