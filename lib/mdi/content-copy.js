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

var MdiContentCopy = function (_React$Component) {
    _inherits(MdiContentCopy, _React$Component);

    function MdiContentCopy() {
        _classCallCheck(this, MdiContentCopy);

        return _possibleConstructorReturn(this, (MdiContentCopy.__proto__ || Object.getPrototypeOf(MdiContentCopy)).apply(this, arguments));
    }

    _createClass(MdiContentCopy, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 19,21L 8,21L 8,7L 19,7M 19,5L 8,5C 6.9,5 6,5.9 6,7L 6,21C 6,22.1 6.9,23 8,23L 19,23C 20.1,23 21,22.1 21,21L 21,7C 21,5.9 20.1,5 19,5 Z M 16,1L 4,1C 2.9,1 2,1.9 2,3L 2,17L 4,17L 4,3L 16,3L 16,1 Z ' })
                )
            );
        }
    }]);

    return MdiContentCopy;
}(React.Component);

exports.default = MdiContentCopy;
module.exports = exports['default'];