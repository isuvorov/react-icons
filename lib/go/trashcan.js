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

var GoTrashcan = function (_React$Component) {
    _inherits(GoTrashcan, _React$Component);

    function GoTrashcan() {
        _classCallCheck(this, GoTrashcan);

        return _possibleConstructorReturn(this, (GoTrashcan.__proto__ || Object.getPrototypeOf(GoTrashcan)).apply(this, arguments));
    }

    _createClass(GoTrashcan, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm32.5 5h-10v-1.2c0-0.7-0.6-1.3-1.2-1.3s-1.3 0.6-1.3 1.3v1.2h-10c-1.4 0-2.5 1.1-2.5 2.5v2.5c0 1.4 1.1 2.5 2.5 2.5v22.5c0 1.4 1.1 2.5 2.5 2.5h17.5c1.4 0 2.5-1.1 2.5-2.5v-22.5c1.4 0 2.5-1.1 2.5-2.5v-2.5c0-1.4-1.1-2.5-2.5-2.5z m-2.5 28.8c0 0.6-0.6 1.2-1.2 1.2h-15c-0.7 0-1.3-0.6-1.3-1.2v-21.3h2.5v18.8c0 0.6 0.6 1.2 1.3 1.2s1.2-0.6 1.2-1.2l0-18.8h2.5v18.8c0 0.6 0.6 1.2 1.3 1.2s1.2-0.6 1.2-1.2l0-18.8h2.5l0 18.8c0 0.6 0.6 1.2 1.3 1.2s1.2-0.6 1.2-1.2v-18.8h2.5v21.3z m2.5-24.4c0 0.3-0.3 0.6-0.6 0.6h-21.3c-0.3 0-0.6-0.3-0.6-0.6v-1.3c0-0.3 0.3-0.6 0.6-0.6h21.3c0.3 0 0.6 0.3 0.6 0.6v1.3z' })
                )
            );
        }
    }]);

    return GoTrashcan;
}(React.Component);

exports.default = GoTrashcan;
module.exports = exports['default'];