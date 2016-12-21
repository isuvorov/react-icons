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

var TiAdjustBrightness = function (_React$Component) {
    _inherits(TiAdjustBrightness, _React$Component);

    function TiAdjustBrightness() {
        _classCallCheck(this, TiAdjustBrightness);

        return _possibleConstructorReturn(this, (TiAdjustBrightness.__proto__ || Object.getPrototypeOf(TiAdjustBrightness)).apply(this, arguments));
    }

    _createClass(TiAdjustBrightness, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 11.6l1.7-4.9c0.1-0.4 0.1-0.8 0-1.2-0.3-0.9-1.3-1.4-2.3-1.1-0.9 0.3-1.4 1.3-1.1 2.3l1.7 4.9z m-13.3 6.7c-0.4-0.1-0.8-0.1-1.2 0-0.9 0.3-1.4 1.3-1.1 2.3 0.3 0.9 1.3 1.4 2.3 1.1l4.9-1.7-4.9-1.7z m13.3 10.1l-1.7 4.9c-0.1 0.4-0.1 0.8 0 1.2 0.3 0.9 1.3 1.4 2.3 1.1 0.9-0.3 1.4-1.3 1.1-2.3l-1.7-4.9z m15.6-9c-0.3-0.9-1.3-1.4-2.3-1.1l-4.9 1.7 4.9 1.7c0.4 0.1 0.8 0.1 1.2 0 0.9-0.3 1.4-1.4 1.1-2.3z m-26.2-7.6l4.6 2.2-2.2-4.6c-0.2-0.3-0.5-0.6-0.9-0.8-0.8-0.4-1.9-0.1-2.3 0.8-0.4 0.9-0.1 1.9 0.8 2.4z m-0.8 17.3c-0.4 0.8-0.1 1.9 0.8 2.3 0.9 0.4 1.9 0.1 2.3-0.8l2.3-4.6-4.6 2.3c-0.3 0.1-0.6 0.4-0.8 0.8z m22-0.9l-4.6-2.2 2.2 4.6c0.2 0.3 0.5 0.6 0.9 0.8 0.8 0.4 1.9 0.1 2.3-0.8s0.1-1.9-0.8-2.4z m0.8-17.3c0.4-0.8 0.1-1.9-0.8-2.3-0.9-0.4-1.9-0.1-2.4 0.8l-2.2 4.6 4.6-2.3c0.3-0.1 0.6-0.4 0.8-0.8z m-11.4 1.6c-4.1 0-7.5 3.4-7.5 7.5s3.4 7.5 7.5 7.5 7.5-3.4 7.5-7.5-3.4-7.5-7.5-7.5z' })
                )
            );
        }
    }]);

    return TiAdjustBrightness;
}(React.Component);

exports.default = TiAdjustBrightness;
module.exports = exports['default'];