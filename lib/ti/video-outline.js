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

var TiVideoOutline = function (_React$Component) {
    _inherits(TiVideoOutline, _React$Component);

    function TiVideoOutline() {
        _classCallCheck(this, TiVideoOutline);

        return _possibleConstructorReturn(this, (TiVideoOutline.__proto__ || Object.getPrototypeOf(TiVideoOutline)).apply(this, arguments));
    }

    _createClass(TiVideoOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm13.3 18.3c0 1-0.7 1.7-1.6 1.7s-1.7-0.7-1.7-1.7c0-0.9 0.7-1.6 1.7-1.6s1.6 0.7 1.6 1.6z m22.7-6.3c-0.5-0.3-1-0.4-1.5-0.2l-2.9 0.9c-0.3-2.5-2.4-4.4-4.9-4.4h-18.4c-2.7 0-5 2.3-5 5v10c0 2.8 2.3 5 5 5h5v1.9l0 0.1c0.2 1.3 0.7 2.4 1.5 3.2 1 1 2.2 1.5 3.5 1.5s2.6-0.5 3.5-1.5c1-0.9 1.5-2.2 1.5-3.5v-1.7h3.4c2.5 0 4.6-1.9 4.9-4.3l2.9 0.9c0.5 0.2 1 0.1 1.5-0.2 0.4-0.3 0.7-0.8 0.7-1.4v-10c0-0.5-0.3-1-0.7-1.3z m-16 18c0 0.5-0.2 0.9-0.5 1.2-0.3 0.3-0.7 0.5-1.2 0.5-0.4 0-0.8-0.2-1.1-0.5-0.3-0.3-0.5-0.7-0.5-1.2v-3.3h3.3v3.3z m8.3-6.7c0 1-0.7 1.7-1.6 1.7h-18.4c-0.9 0-1.6-0.7-1.6-1.7v-10c0-0.9 0.7-1.6 1.6-1.6h18.4c0.9 0 1.6 0.7 1.6 1.6v10z m5-2.3s-3.1-1-3.3-1v-3.3c0.2 0 3.3-1.1 3.3-1.1v5.4z' })
                )
            );
        }
    }]);

    return TiVideoOutline;
}(React.Component);

exports.default = TiVideoOutline;
module.exports = exports['default'];