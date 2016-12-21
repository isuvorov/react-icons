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

var MdiPencilBox = function (_React$Component) {
    _inherits(MdiPencilBox, _React$Component);

    function MdiPencilBox() {
        _classCallCheck(this, MdiPencilBox);

        return _possibleConstructorReturn(this, (MdiPencilBox.__proto__ || Object.getPrototypeOf(MdiPencilBox)).apply(this, arguments));
    }

    _createClass(MdiPencilBox, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 18.9998,3.00006C 20.1038,3.00006 20.9998,3.89606 20.9998,5.00006L 20.9998,19C 20.9998,20.105 20.1038,21 18.9998,21L 4.99988,21C 3.89587,21 2.99988,20.105 2.99988,19L 2.99988,5.00006C 2.99988,3.89606 3.89587,3.00006 4.99988,3.00006L 18.9998,3.00006 Z M 16.7034,9.35078C 16.9176,9.13654 16.9176,8.78978 16.7034,8.57618L 15.4237,7.2965C 15.2101,7.08228 14.8634,7.08228 14.6492,7.2965L 13.6456,8.30006L 15.6998,10.3543L 16.7034,9.35078 Z M 7.00343,14.9422L 7.00343,16.9965L 9.0577,16.9965L 15.1192,10.935L 13.0649,8.88072L 7.00343,14.9422 Z ' })
                )
            );
        }
    }]);

    return MdiPencilBox;
}(React.Component);

exports.default = MdiPencilBox;
module.exports = exports['default'];