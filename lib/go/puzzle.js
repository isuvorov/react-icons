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

var GoPuzzle = function (_React$Component) {
    _inherits(GoPuzzle, _React$Component);

    function GoPuzzle() {
        _classCallCheck(this, GoPuzzle);

        return _possibleConstructorReturn(this, (GoPuzzle.__proto__ || Object.getPrototypeOf(GoPuzzle)).apply(this, arguments));
    }

    _createClass(GoPuzzle, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm29.5 22.5c-0.5-0.4-1.1-0.7-1.7-0.8-0.3-0.1-0.7-0.1-1.1-0.1-0.3 0-0.6 0.1-1 0.2-0.2 0-0.4 0.1-0.7 0.2-0.7 0.3-1.3 0.7-1.8 1.2-0.5 0.5-0.9 1.1-1.2 1.8-0.1 0.3-0.2 0.5-0.2 0.7-0.1 0.4-0.2 0.7-0.2 1 0 0.4 0 0.8 0.1 1.1 0.1 0.6 0.4 1.2 0.8 1.7 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 1.7 1.2 2.9 1.3 0.4 0.1 0.7 0.1 1 0.2 0.2 0.1 0.4 0.2 0.5 0.3 0.3 0.2 0.3 0.6 0.1 1-0.1 0.3-0.3 0.6-0.5 0.8l-0.1 0.1-0.3 0.3-0.3 0.3-0.1 0.1c-0.5 0.5-0.9 0.9-1.3 1.3l-2.7 2.6-0.8 0.9c-0.2 0.2-0.3 0.3-0.5 0.4 0 0-0.1 0.1-0.2 0.1-0.7 0.4-1.6 0.2-2.3-0.5l-0.6-0.6c-1.2-1.2-2.4-2.4-3.5-3.5l-1-1c-0.3-0.3-0.5-0.5-0.8-0.7-0.2-0.2-0.5-0.3-0.7-0.4-0.8-0.3-1.6-0.1-2.1 0.5-0.2 0.2-0.3 0.4-0.4 0.7-0.1 0.4-0.2 0.8-0.2 1.1-0.2 1.5-1 2.7-2.2 3.3-0.3 0.1-0.6 0.2-0.9 0.3-0.4 0-0.7 0-1 0-1 0-1.9-0.5-2.7-1.3l0-0.1c-0.8-0.7-1.3-1.6-1.3-2.6 0-0.3 0-0.6 0-1 0.1-0.3 0.2-0.6 0.3-0.9 0.6-1.2 1.8-2 3.3-2.2 0.3 0 0.7-0.1 1.1-0.2 0.3-0.1 0.5-0.2 0.7-0.4 0.6-0.5 0.8-1.3 0.5-2.1-0.1-0.2-0.2-0.5-0.4-0.7-0.2-0.3-0.4-0.5-0.7-0.8-0.3-0.3-0.6-0.6-1-1-1-1-2.1-2.1-3.1-3.1l-0.4-0.4-0.6-0.6c-0.7-0.7-0.9-1.6-0.5-2.3 0-0.1 0.1-0.2 0.1-0.2 0.1-0.2 0.2-0.3 0.4-0.5l0.9-0.8c0.8-0.9 1.7-1.8 2.6-2.7 0.4-0.4 0.8-0.8 1.3-1.2l0.1-0.2 0.3-0.3 0.3-0.3 0.1-0.1c0.2-0.2 0.5-0.4 0.8-0.5 0.4-0.2 0.8-0.2 1 0.1 0.1 0.1 0.2 0.3 0.3 0.5 0.1 0.3 0.1 0.7 0.2 1 0.1 1.2 0.5 2.2 1.3 2.9 0.2 0.2 0.4 0.4 0.6 0.5 0.5 0.4 1.1 0.7 1.7 0.8 0.3 0.1 0.7 0.1 1.1 0.1 0.3 0 0.6-0.1 1-0.2 0.2 0 0.4-0.1 0.7-0.2 0.7-0.3 1.3-0.7 1.8-1.2 0.5-0.5 0.9-1.1 1.2-1.8 0.1-0.3 0.2-0.5 0.2-0.7 0.1-0.4 0.2-0.7 0.2-1 0-0.4 0-0.8-0.1-1.1-0.1-0.6-0.4-1.2-0.8-1.7-0.1-0.2-0.3-0.4-0.5-0.6-0.7-0.8-1.7-1.2-2.9-1.3-0.3-0.1-0.7-0.1-1-0.2-0.2-0.1-0.4-0.2-0.5-0.3-0.3-0.2-0.3-0.6-0.1-1 0.1-0.3 0.3-0.6 0.5-0.8l0.1-0.1 0.3-0.3 0.3-0.3 0.2-0.1c0.4-0.4 0.8-0.9 1.2-1.3l2.7-2.6 0.8-0.9c0.2-0.2 0.3-0.3 0.5-0.4 0 0 0.1-0.1 0.2-0.1 0.7-0.4 1.6-0.2 2.3 0.5l0.6 0.6c1.2 1.2 2.4 2.4 3.5 3.5l1 1c0.3 0.3 0.5 0.5 0.8 0.7 0.2 0.2 0.5 0.3 0.7 0.4 0.8 0.3 1.6 0.1 2.1-0.5 0.2-0.2 0.3-0.4 0.4-0.7 0.1-0.4 0.2-0.8 0.2-1.1 0.2-1.5 1-2.7 2.2-3.3 0.3-0.1 0.6-0.2 0.9-0.3 0.4 0 0.7 0 1 0 1 0 1.9 0.5 2.7 1.3l0.1 0.1c0.7 0.7 1.2 1.6 1.2 2.6 0 0.3 0 0.6 0 1-0.1 0.3-0.2 0.6-0.3 0.9-0.6 1.2-1.8 2-3.3 2.2-0.3 0-0.7 0.1-1.1 0.2-0.3 0.1-0.5 0.2-0.7 0.4-0.6 0.5-0.8 1.3-0.5 2.1 0.1 0.2 0.2 0.5 0.4 0.7 0.2 0.3 0.4 0.5 0.7 0.8 0.3 0.3 0.6 0.6 1 1 1.1 1.1 2.3 2.3 3.5 3.5l0.6 0.6c0.7 0.7 0.9 1.6 0.5 2.3 0 0.1-0.1 0.2-0.1 0.2-0.1 0.2-0.2 0.3-0.4 0.5l-0.9 0.8c-0.8 0.9-1.7 1.8-2.6 2.7-0.4 0.4-0.8 0.8-1.3 1.2l-0.1 0.2-0.3 0.3-0.3 0.3-0.1 0.1c-0.2 0.2-0.5 0.4-0.8 0.5-0.4 0.2-0.8 0.2-1-0.1-0.1-0.1-0.2-0.3-0.3-0.5-0.1-0.3-0.1-0.6-0.2-1-0.1-1.2-0.5-2.2-1.3-2.9-0.2-0.2-0.4-0.4-0.6-0.5z' })
                )
            );
        }
    }]);

    return GoPuzzle;
}(React.Component);

exports.default = GoPuzzle;
module.exports = exports['default'];