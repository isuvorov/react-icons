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

var GoOctoface = function (_React$Component) {
    _inherits(GoOctoface, _React$Component);

    function GoOctoface() {
        _classCallCheck(this, GoOctoface);

        return _possibleConstructorReturn(this, (GoOctoface.__proto__ || Object.getPrototypeOf(GoOctoface)).apply(this, arguments));
    }

    _createClass(GoOctoface, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm36.8 10.8c0.3-0.7 1.3-3.9-0.4-8.2 0 0-2.6-0.9-8.6 3.2-2.5-0.7-5.1-0.8-7.8-0.8-2.7 0-5.3 0.1-7.8 0.8-6-4.1-8.6-3.2-8.6-3.2-1.7 4.3-0.7 7.5-0.4 8.2-2 2.2-3.2 5-3.2 8.4 0 12.9 8.3 15.8 20 15.8 11.6 0 20-2.9 20-15.8 0-3.4-1.2-6.2-3.2-8.4z m-16.8 21.7c-8.3 0-15-0.3-15-8.3 0-2 1-3.7 2.6-5.2 2.7-2.5 7.2-1.2 12.4-1.2 5.2 0 9.7-1.3 12.4 1.2 1.6 1.5 2.6 3.2 2.6 5.1 0 8.1-6.7 8.4-15 8.4z m-6.3-12.5c-1.6 0-3 2-3 4.5s1.4 4.4 3 4.4c1.7 0 3-2 3-4.4s-1.3-4.5-3-4.5z m12.6 0c-1.7 0-3 2-3 4.5s1.3 4.4 3 4.4 3-2 3-4.4c0-2.5-1.4-4.5-3-4.5z' })
                )
            );
        }
    }]);

    return GoOctoface;
}(React.Component);

exports.default = GoOctoface;
module.exports = exports['default'];