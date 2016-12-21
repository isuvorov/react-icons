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

var MdiHeadphonesBox = function (_React$Component) {
    _inherits(MdiHeadphonesBox, _React$Component);

    function MdiHeadphonesBox() {
        _classCallCheck(this, MdiHeadphonesBox);

        return _possibleConstructorReturn(this, (MdiHeadphonesBox.__proto__ || Object.getPrototypeOf(MdiHeadphonesBox)).apply(this, arguments));
    }

    _createClass(MdiHeadphonesBox, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 7.1994,17.9981C 6.5364,17.9981 5.9994,17.4611 5.9994,16.7981L 5.9994,13.1981L 5.9994,11.9981C 5.9994,8.69005 8.6914,5.99807 11.9994,5.99807C 15.3074,5.99807 17.9994,8.69005 17.9994,11.9981L 17.9994,13.1981L 17.9994,16.7981C 17.9994,17.4611 17.4624,17.9981 16.7994,17.9981L 13.9994,17.9981L 13.9994,13.9981L 15.9994,13.9981L 15.9994,11.9981C 15.9994,9.79207 14.2054,7.99807 11.9994,7.99807C 9.79341,7.99807 7.9994,9.79207 7.9994,11.9981L 7.9994,13.9981L 9.9994,13.9981L 9.9994,17.9981M 18.9994,2.99807L 4.9994,2.99807C 3.8944,2.99807 2.9994,3.89406 2.9994,4.99807L 2.9994,18.9981C 2.9994,20.1021 3.8944,20.9981 4.9994,20.9981L 18.9994,20.9981C 20.1034,20.9981 20.9994,20.1021 20.9994,18.9981L 20.9994,4.99807C 20.9994,3.89406 20.1034,2.99807 18.9994,2.99807 Z ' })
                )
            );
        }
    }]);

    return MdiHeadphonesBox;
}(React.Component);

exports.default = MdiHeadphonesBox;
module.exports = exports['default'];