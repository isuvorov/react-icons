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

var FaExternalLink = function (_React$Component) {
    _inherits(FaExternalLink, _React$Component);

    function FaExternalLink() {
        _classCallCheck(this, FaExternalLink);

        return _possibleConstructorReturn(this, (FaExternalLink.__proto__ || Object.getPrototypeOf(FaExternalLink)).apply(this, arguments));
    }

    _createClass(FaExternalLink, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.4 20.7v7.2q0 2.6-1.9 4.5t-4.5 1.9h-18.6q-2.6 0-4.5-1.9t-1.9-4.5v-18.6q0-2.7 1.9-4.6t4.5-1.8h15.7q0.4 0 0.6 0.2t0.2 0.5v1.4q0 0.3-0.2 0.5t-0.6 0.2h-15.7q-1.4 0-2.5 1.1t-1 2.5v18.6q0 1.4 1 2.5t2.5 1h18.6q1.5 0 2.5-1t1.1-2.5v-7.2q0-0.3 0.2-0.5t0.5-0.2h1.4q0.3 0 0.5 0.2t0.2 0.5z m8.6-19.3v11.5q0 0.5-0.4 1t-1 0.4-1-0.4l-4-4-14.5 14.6q-0.2 0.2-0.5 0.2t-0.5-0.2l-2.6-2.6q-0.2-0.2-0.2-0.5t0.2-0.5l14.6-14.5-4-4q-0.4-0.4-0.4-1t0.4-1 1-0.4h11.5q0.6 0 1 0.4t0.4 1z' })
                )
            );
        }
    }]);

    return FaExternalLink;
}(React.Component);

exports.default = FaExternalLink;
module.exports = exports['default'];