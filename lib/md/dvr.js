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

var MdDvr = function (_React$Component) {
    _inherits(MdDvr, _React$Component);

    function MdDvr() {
        _classCallCheck(this, MdDvr);

        return _possibleConstructorReturn(this, (MdDvr.__proto__ || Object.getPrototypeOf(MdDvr)).apply(this, arguments));
    }

    _createClass(MdDvr, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm11.6 20v3.4h-3.2v-3.4h3.2z m0-6.6v3.2h-3.2v-3.2h3.2z m20 6.6v3.4h-18.2v-3.4h18.2z m0-6.6v3.2h-18.2v-3.2h18.2z m3.4 15v-20h-30v20h30z m0-23.4c1.8 0 3.4 1.6 3.4 3.4l-0.1 20c0 1.8-1.5 3.2-3.3 3.2h-8.4v3.4h-13.2v-3.4h-8.4c-1.8 0-3.4-1.4-3.4-3.2v-20c0-1.8 1.6-3.4 3.4-3.4h30z' })
                )
            );
        }
    }]);

    return MdDvr;
}(React.Component);

exports.default = MdDvr;
module.exports = exports['default'];