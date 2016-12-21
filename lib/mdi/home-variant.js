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

var MdiHomeVariant = function (_React$Component) {
    _inherits(MdiHomeVariant, _React$Component);

    function MdiHomeVariant() {
        _classCallCheck(this, MdiHomeVariant);

        return _possibleConstructorReturn(this, (MdiHomeVariant.__proto__ || Object.getPrototypeOf(MdiHomeVariant)).apply(this, arguments));
    }

    _createClass(MdiHomeVariant, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 7.99915,19.9985L 4.99939,19.998L 4.99939,11.998L 1.99939,11.998L 11.9994,2.99805L 21.9994,11.998L 18.9994,11.998L 18.9994,19.998L 11.9991,19.9985L 11.9991,13.9985L 7.99915,13.9985L 7.99915,19.9985 Z M 14,14L 14,17L 17,17L 17,14L 14,14 Z ' })
                )
            );
        }
    }]);

    return MdiHomeVariant;
}(React.Component);

exports.default = MdiHomeVariant;
module.exports = exports['default'];