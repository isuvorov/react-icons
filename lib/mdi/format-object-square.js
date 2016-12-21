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

var MdiFormatObjectSquare = function (_React$Component) {
    _inherits(MdiFormatObjectSquare, _React$Component);

    function MdiFormatObjectSquare() {
        _classCallCheck(this, MdiFormatObjectSquare);

        return _possibleConstructorReturn(this, (MdiFormatObjectSquare.__proto__ || Object.getPrototypeOf(MdiFormatObjectSquare)).apply(this, arguments));
    }

    _createClass(MdiFormatObjectSquare, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 12,7L 17,17L 7,17L 12,7 Z M 3,3L 21,3L 21,5L 3,5L 3,3 Z M 3,7.00001L 6,7.00001L 6,9.00001L 3,9.00001L 3,7.00001 Z M 21,7.00001L 21,9.00001L 18,9.00001L 18,7.00001L 21,7.00001 Z M 3,11L 6,11L 6,13L 3,13L 3,11 Z M 21,11L 21,13L 18,13L 18,11L 21,11 Z M 3,15L 6,15L 6,17L 3,17L 3,15 Z M 21,15L 21,17L 18,17L 18,15L 21,15 Z M 3,19L 21,19L 21,21L 3,21L 3,19 Z ' })
                )
            );
        }
    }]);

    return MdiFormatObjectSquare;
}(React.Component);

exports.default = MdiFormatObjectSquare;
module.exports = exports['default'];