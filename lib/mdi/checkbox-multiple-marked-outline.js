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

var MdiCheckboxMultipleMarkedOutline = function (_React$Component) {
    _inherits(MdiCheckboxMultipleMarkedOutline, _React$Component);

    function MdiCheckboxMultipleMarkedOutline() {
        _classCallCheck(this, MdiCheckboxMultipleMarkedOutline);

        return _possibleConstructorReturn(this, (MdiCheckboxMultipleMarkedOutline.__proto__ || Object.getPrototypeOf(MdiCheckboxMultipleMarkedOutline)).apply(this, arguments));
    }

    _createClass(MdiCheckboxMultipleMarkedOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 19.9993,15.9981L 19.9992,9.99807L 21.9992,9.99807L 21.9993,15.9981C 21.9993,17.1031 21.1033,17.9981 19.9993,17.9981L 7.99939,17.9981C 6.89439,17.9981 5.9994,17.1031 5.9994,15.9981L 5.99928,3.99808C 5.99928,2.89308 6.89427,1.99809 7.99928,1.99809L 15.9992,1.99808L 15.9992,3.99808L 7.99928,3.99808L 7.99939,15.9991L 19.9993,15.9981 Z M 10.9134,7.08408L 13.9994,10.1701L 20.5852,3.58409L 21.9992,4.99808L 13.9994,12.9981L 9.49939,8.49808L 10.9134,7.08408 Z M 16,20L 16,22L 4.00002,22C 2.89502,22 2.00002,21.105 2.00002,20L 1.99996,7.00002L 3.99996,7.00002L 4.00002,20.001L 16,20 Z ' })
                )
            );
        }
    }]);

    return MdiCheckboxMultipleMarkedOutline;
}(React.Component);

exports.default = MdiCheckboxMultipleMarkedOutline;
module.exports = exports['default'];