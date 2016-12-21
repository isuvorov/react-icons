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

var MdiBattery40 = function (_React$Component) {
    _inherits(MdiBattery40, _React$Component);

    function MdiBattery40() {
        _classCallCheck(this, MdiBattery40);

        return _possibleConstructorReturn(this, (MdiBattery40.__proto__ || Object.getPrototypeOf(MdiBattery40)).apply(this, arguments));
    }

    _createClass(MdiBattery40, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 16,14L 7.99998,14L 7.99939,5.99805L 15.9994,5.99805M 16.6664,3.99805L 14.9994,3.99805L 14.9994,1.99805L 8.99939,1.99805L 8.99939,3.99805L 7.33238,3.99805C 6.59607,3.99805 5.99939,4.59503 5.99939,5.33105L 5.99939,20.665C 5.99939,21.4011 6.59607,21.998 7.33238,21.998L 16.6664,21.998C 17.4027,21.998 17.9994,21.4011 17.9994,20.665L 17.9994,5.33105C 17.9994,4.59503 17.4027,3.99805 16.6664,3.99805 Z ' })
                )
            );
        }
    }]);

    return MdiBattery40;
}(React.Component);

exports.default = MdiBattery40;
module.exports = exports['default'];