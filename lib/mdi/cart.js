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

var MdiCart = function (_React$Component) {
    _inherits(MdiCart, _React$Component);

    function MdiCart() {
        _classCallCheck(this, MdiCart);

        return _possibleConstructorReturn(this, (MdiCart.__proto__ || Object.getPrototypeOf(MdiCart)).apply(this, arguments));
    }

    _createClass(MdiCart, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 16.9994,17.9981C 15.8944,17.9981 15.0094,18.8931 15.0094,19.9981C 15.0094,21.1031 15.8944,21.9981 16.9994,21.9981C 18.1034,21.9981 18.9994,21.1031 18.9994,19.9981C 18.9994,18.8931 18.1034,17.9981 16.9994,17.9981 Z M 0.99939,1.99807L 0.99939,3.99807L 2.99939,3.99807L 6.59607,11.5851L 5.24438,14.0371C 5.08839,14.3221 4.99939,14.6501 4.99939,14.9981C 4.99939,16.1031 5.89439,16.9981 6.99939,16.9981L 18.9994,16.9981L 18.9994,14.9981L 7.42239,14.9981C 7.28439,14.9981 7.17239,14.8871 7.17239,14.7481C 7.17239,14.7041 7.18439,14.6621 7.20439,14.6271L 8.10139,12.9981L 15.5504,12.9981C 16.3024,12.9981 16.9574,12.5831 17.2994,11.9691L 20.8754,5.48006C 20.9544,5.33806 20.9994,5.17307 20.9994,4.99807C 20.9994,4.44507 20.5514,3.99807 19.9994,3.99807L 5.21239,3.99807L 4.2654,1.99807M 6.99939,17.9981C 5.89439,17.9981 5.00938,18.8931 5.00938,19.9981C 5.00938,21.1031 5.89439,21.9981 6.99939,21.9981C 8.10339,21.9981 8.99939,21.1031 8.99939,19.9981C 8.99939,18.8931 8.10339,17.9981 6.99939,17.9981 Z ' })
                )
            );
        }
    }]);

    return MdiCart;
}(React.Component);

exports.default = MdiCart;
module.exports = exports['default'];