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

var FaExternalLinkSquare = function (_React$Component) {
    _inherits(FaExternalLinkSquare, _React$Component);

    function FaExternalLinkSquare() {
        _classCallCheck(this, FaExternalLinkSquare);

        return _possibleConstructorReturn(this, (FaExternalLinkSquare.__proto__ || Object.getPrototypeOf(FaExternalLinkSquare)).apply(this, arguments));
    }

    _createClass(FaExternalLinkSquare, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.6 20.7v-10.7q0-0.6-0.5-1t-1-0.4h-10.7q-0.9 0-1.3 0.8-0.4 1 0.3 1.6l3.2 3.2-11.9 11.9q-0.4 0.5-0.4 1t0.4 1l2.3 2.3q0.4 0.4 1 0.4t1-0.4l11.9-11.9 3.2 3.2q0.4 0.4 1 0.4 0.3 0 0.6-0.1 0.9-0.3 0.9-1.3z m5.7-11.4v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z' })
                )
            );
        }
    }]);

    return FaExternalLinkSquare;
}(React.Component);

exports.default = FaExternalLinkSquare;
module.exports = exports['default'];