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

var MdiFolderStar = function (_React$Component) {
    _inherits(MdiFolderStar, _React$Component);

    function MdiFolderStar() {
        _classCallCheck(this, MdiFolderStar);

        return _possibleConstructorReturn(this, (MdiFolderStar.__proto__ || Object.getPrototypeOf(MdiFolderStar)).apply(this, arguments));
    }

    _createClass(MdiFolderStar, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 20,6L 12,6L 10,4L 4,4C 2.9,4 2,4.9 2,6L 2,18C 2,19.1 2.9,20 4,20L 20,20C 21.1,20 22,19.1 22,18L 22,8C 22,6.9 21.1,6 20,6 Z M 17.94,17L 15,15.28L 12.06,17L 12.84,13.67L 10.25,11.43L 13.66,11.14L 15,8L 16.34,11.14L 19.75,11.43L 17.16,13.67L 17.94,17 Z ' })
                )
            );
        }
    }]);

    return MdiFolderStar;
}(React.Component);

exports.default = MdiFolderStar;
module.exports = exports['default'];