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

var FaTag = function (_React$Component) {
    _inherits(FaTag, _React$Component);

    function FaTag() {
        _classCallCheck(this, FaTag);

        return _possibleConstructorReturn(this, (FaTag.__proto__ || Object.getPrototypeOf(FaTag)).apply(this, arguments));
    }

    _createClass(FaTag, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm13 10q0-1.2-0.8-2t-2.1-0.9-2 0.9-0.8 2 0.8 2 2 0.9 2.1-0.9 0.8-2z m23.8 12.9q0 1.1-0.8 2l-11 10.9q-0.8 0.9-2 0.9-1.2 0-2-0.9l-16-15.9q-0.8-0.9-1.4-2.3t-0.6-2.6v-9.3q0-1.1 0.8-2t2.1-0.8h9.2q1.2 0 2.7 0.5t2.2 1.5l16 15.9q0.8 0.9 0.8 2.1z' })
                )
            );
        }
    }]);

    return FaTag;
}(React.Component);

exports.default = FaTag;
module.exports = exports['default'];